// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyBq9kaokK0LukQq5oC33KR3l4cfrPqsjIA",
	authDomain: "clone-bfd3a.firebaseapp.com",
	projectId: "clone-bfd3a",
	storageBucket: "clone-bfd3a.appspot.com",
	messagingSenderId: "796501657255",
	appId: "1:796501657255:web:0168ae99348d3064993d82",
	measurementId: "G-9HJK5FZ8X9",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
