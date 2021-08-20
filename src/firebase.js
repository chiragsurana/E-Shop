import * as  firebase from "firebase";
import 'firebase/firestore'
const firebaseConfig=  {
        apiKey: "AIzaSyDuY_LIoFPjNZ1Vf3lNH78JZRcGeVeCnlE",
        authDomain: "e-com-fbcbf.firebaseapp.com",
        databaseURL: "https://e-com-fbcbf-default-rtdb.firebaseio.com",
        projectId: "e-com-fbcbf",
        storageBucket: "e-com-fbcbf.appspot.com",
        messagingSenderId: "623925245079",
        appId: "1:623925245079:web:5eb1168df0103b4ff5e5d2",
        measurementId: "G-JXG2XW5GEX"
    
      
} ;
const firebaseApp = firebase.initializeApp(firebaseConfig);
export  const db=firebaseApp.firestore();
export const auth=firebase.auth();
 