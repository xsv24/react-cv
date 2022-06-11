import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from 'firebase/database';

const onSuccess = snap => snap.val();

const onError = err => console.error(err);

export function firebase(config){
    const app = initializeApp(config);
    const db = ref(getDatabase(app, config.databaseURL));

    function once(name, callback=onSuccess, errCallback=onError){
        try {
            return get(child(db, name))
                .then(callback)
                .catch(errCallback);
        
        }catch(err){
            return Promise.reject(err);
        }
    }

    function getExperiences() {
        return once('experience');
    }
    
    async function getSkills(){
        // concat skills for now split up into different sections later
        const res = await Promise.all([
            once('skills'),
            once('concepts'),
            once('platforms'),
            once('frameworks')
        ]);
        return res.reduce((prev, next) => prev.concat(next), []);
    }

    return {
        once,
        getSkills,
        getExperiences
    }
}