import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAcO0C296poaksS7Q7nKPwpS8sR8nseoQ0",
    authDomain: "m-city-dc2d5.firebaseapp.com",
    databaseURL: "https://m-city-dc2d5-default-rtdb.firebaseio.com",
    projectId: "m-city-dc2d5",
    storageBucket: "m-city-dc2d5.appspot.com",
    messagingSenderId: "127153295616",
    appId: "1:127153295616:web:2729e5679c06c22d01e3e5",
    measurementId: "G-WNRD108YNC"
};

firebase.initializeApp(firebaseConfig);

const firabaseDb = firebase.database();
const firabaseMatches = firabaseDb.ref('matches');
const firabasePromotions = firabaseDb.ref('promotions');
const firabaseTeams = firabaseDb.ref('teams')
const firabasePlayers = firabaseDb.ref('players')
export{
    firebase,
    firabaseMatches,
    firabasePromotions,
    firabaseTeams,
    firabaseDb,
    firabasePlayers
}