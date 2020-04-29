import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCeCOUR2JmzR5asEk6WCSjhzX53zhCxGO8",
    authDomain: "sourch-26b1f.firebaseapp.com",
    databaseURL: "https://sourch-26b1f.firebaseio.com",
    projectId: "sourch-26b1f",
    storageBucket: "sourch-26b1f.appspot.com",
    messagingSenderId: "828160653947",
    appId: "1:828160653947:web:1ff9b17804961c837940de",
    measurementId: "G-KS1WZE543V"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({"login_hint": "user@example.com"});

export const signInWithGoogleWithPrompt = () => auth.signInWithPopup(provider);
export const signInWithGoogleWithRedirect = () => auth.signInWithRedirect(provider);

export const createUser = async (authUser, additionalUserInfo) => {
    if (!authUser) {
        return;
    }

    const usersRef = firestore.doc(`users/${authUser.uid}`);
    const docSnapShot = await usersRef.get()

    if (!docSnapShot.exists) {
        const {displayName, email, phoneNumber} = authUser;
        const createdAt = new Date();
        try {
            await usersRef.set({
                displayName,
                email,
                phoneNumber,
                createdAt,
                ...additionalUserInfo
            });
            console.log("Added User to Firestore")
        } catch (error) {
            console.log("Error Adding User to Firestore", error.message);
        }
    }

    return usersRef;
}

export default firebase;