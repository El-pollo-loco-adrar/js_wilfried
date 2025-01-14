const firebaseConfig = {

    apiKey: "AIzaSyBqnTacdvtEUnYb71yG0Q4Uen5YLOoNO9o",

    authDomain: "soupe-de-poulet.firebaseapp.com",

    projectId: "soupe-de-poulet",

    storageBucket: "soupe-de-poulet.firebasestorage.app",

    messagingSenderId: "413479521448",

    appId: "1:413479521448:web:ef736f8387c22d989e869d",

    measurementId: "G-BRYEY3252M"
  };
/**
 * Initialisation de Firebase avec la configuration fournie.
 * @function initializeFirebase
 */
firebase.initializeApp(firebaseConfig);

/**
 * Référence à la base de données Firebase.
 * @type {Object}
 */
const dbRef = firebase.database().ref();

/**
 * Référence au noeud "tasks" dans la base de données.
 * @type {Object}
 */
const allTasksRef = dbRef.child("tasks");