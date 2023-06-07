import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBbCPPs5_QCVLroYveEEjQurcMPodylJU8",
    authDomain: "editing-app-de1f1.firebaseapp.com",
    projectId: "editing-app-de1f1",
    storageBucket: "editing-app-de1f1.appspot.com",
    messagingSenderId: "619239255934",
    appId: "1:619239255934:web:60389a2a307ad1a4de8d2f",
    measurementId: "G-KTHNBFEB7X"
};


export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, firebaseId} = doc.data();
        return {
            routName: encodeURI(firebaseId),
            id: doc.id,
            title,
        };
    });
    return transformedCollection
};

const fetchData = async (collectionId) => {
    const collectionRef = firebase.firestore().collection(collectionId);
    const snapshot = await collectionRef.get();
    
    // Extract the data from the snapshot
    const data = snapshot.docs.reduce((result, doc) => {
      result[doc.id] = doc.data();
      return result;
    }, {});
  
    return { [`${collectionId}Data`]: data };
};

export const getAllCategoryData = async (collectionIds) => {
    const promises = await collectionIds.map((collectionId) => fetchData(collectionId));
    const results = await Promise.all(promises);

    // console.log(results);
  
    // Merge all results into a single object
    const dataObject = await results.reduce((result, data) => {
      return { ...result, ...data };
    }, {});
    
    const finalDataObject = Object.entries(dataObject).reduce((acc, [key, value]) => {
        acc[key] = Object.entries(value).map(([id, data]) => ({ id, ...data }));
        return acc;
    }, {});

    return finalDataObject;
};

firebase.initializeApp(config);

export const auth  = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;