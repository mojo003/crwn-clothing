import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBq1Q-QbjIeH0mWLBkctwm3ysBv2W1KPdQ",
  authDomain: "crwn-db-c1fd4.firebaseapp.com",
  projectId: "crwn-db-c1fd4",
  storageBucket: "crwn-db-c1fd4.appspot.com",
  messagingSenderId: "1021178368412",
  appId: "1:1021178368412:web:d06ea870679aedd3bbb859",
  measurementId: "G-ZK5JTDSRXG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;