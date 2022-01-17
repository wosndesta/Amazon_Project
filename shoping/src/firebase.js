// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyCHwAQrcRLHbFOlEHJ0Wj01TQUybvYNnZ4",
	authDomain: "clone-9e1e3.firebaseapp.com",
	projectId: "clone-9e1e3",
	storageBucket: "clone-9e1e3.appspot.com",
	messagingSenderId: "509259387135",
	appId: "1:509259387135:web:b8065050ad78df6eeffcca",
	measurementId: "G-9JW20WCEYK",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
