import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAEGhqB49HH16BPxqoJTckqdHyGxy20LaQ",
  authDomain: "crwn-db-2e0ec.firebaseapp.com",
  projectId: "crwn-db-2e0ec",
  storageBucket: "crwn-db-2e0ec.appspot.com",
  messagingSenderId: "1044968939794",
  appId: "1:1044968939794:web:49acc7a876e4d6fa3f13cb",
  measurementId: "G-XYFB3308E6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creatiung user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;