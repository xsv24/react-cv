export default  {
    db: {
        apiKey: "${process.env.FIREBASE_KEY}",
        authDomain: "${process.env.FIREBASE_PROJECT}.firebaseapp.com",
        databaseURL: "https://${process.env.FIREBASE_PROJECT}.firebaseio.com",
        projectId: "${process.env.FIREBASE_PROJECT}",
        storageBucket: "${process.env.FIREBASE_PROJECT}.appspot.com",
        messagingSenderId: "${process.env.FIREBASE_SENDER_KEY}"
    },
    map: {
        apiKey: "${process.env.GOOGLE_MAPS_API}"
    }
};