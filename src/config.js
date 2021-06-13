const FIREBASE_PROJECT = `${process.env.REACT_APP_FIREBASE_PROJECT}`

export default  {
    db: {
        apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
        authDomain: `${FIREBASE_PROJECT}.firebaseapp.com`,
        databaseURL: `https://${FIREBASE_PROJECT}.firebaseio.com`,
        projectId: `${FIREBASE_PROJECT}`,
        storageBucket: `${FIREBASE_PROJECT}.appspot.com`,
        messagingSenderId: `${process.env.REACT_APP_FIREBASE_SENDER_KEY}`
    },
    map: {
        apiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API}`
    }
};