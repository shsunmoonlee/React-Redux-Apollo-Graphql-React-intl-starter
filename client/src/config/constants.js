import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDeD3eeJ8w7rFTxtuDkR6-Enfcsa7kOWiY",
  authDomain: "lengoo-graphql.firebaseapp.com",
  databaseURL: "https://lengoo-graphql.firebaseio.com",
  projectId: "lengoo-graphql",
  storageBucket: "lengoo-graphql.appspot.com",
  messagingSenderId: "90007807060"
}

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
