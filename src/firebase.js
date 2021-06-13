import { initializeApp, database } from 'firebase';

const onSuccess = snap => snap.val();

const onError = err => console.error(err);

export function firebase(config){
    initializeApp(config);
    
    const db = new database();

    function once(name, callback=onSuccess, errCallback=onError){
        try {
            const childref = db.ref().child(name)
            
            return childref.once('value')
                .then(callback)
                .catch(errCallback);
        
        }catch(err){
            return Promise.reject(err);
        }
    }

    function getExperiences() {
        return once('experience');
    }
    
    function getSkills(){
        // concat skills for now split up into different sections later
        return Promise.all([
            once('skills'),
            once('concepts'),
            once('platforms'),
            once('frameworks')
        ]).then(res => res.reduce((prev, next) => prev.concat(next), []));
    }

    return {
        once,
        getSkills,
        getExperiences
    }
}