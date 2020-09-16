import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Initialize firebase

const config = {
    apiKey: "AIzaSyAPv1tLvOZz3kW__Qth9OzvheLdvAWl-hU",
    authDomain: "bijaymarioplan.firebaseapp.com",
    databaseURL: "https://bijaymarioplan.firebaseio.com",
    projectId: "bijaymarioplan",
    storageBucket: "",
    messagingSenderId: "739639329588",
    appId: "1:739639329588:web:16d3cf9234d47a26c81b61",
    measurementId: "G-09MY0LHMM0"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;