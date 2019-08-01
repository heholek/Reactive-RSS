import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// Reducers
// import notifyReducer from "./reducers/notifyReducer";
// import settingsReducer from "./reducers/settingsReducer";

const firebaseConfig = {
  //  YOUR FIREBASE CONFIG FILE GOES HERE ...
  apiKey: "AIzaSyDjVkTaWYsYlxkRXlaqlPdW9-H65Fr3l5I",
  authDomain: "reactive-rss-d3f9c.firebaseapp.com",
  databaseURL: "https://reactive-rss-d3f9c.firebaseio.com",
  projectId: "reactive-rss-d3f9c",
  storageBucket: "reactive-rss-d3f9c.appspot.com",
  messagingSenderId: "391343765670",
  appId: "1:391343765670:web:299051682bf16352"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
// const firestore = firebase.firestore();
// const settings = { timestampsInSnapshots: true };
// firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
  // notify: notifyReducer,
  // settings: settingsReducer
});

// Check for settings in localStorage
// if (localStorage.getItem('settings') == null) {
//   // Default settings
//   const defaultSettings = {
//     disableBalanceOnAdd: true,
//     disableBalanceOnEdit: false,
//     allowRegistration: false
//   };

//   // Set to localStorage
//   localStorage.setItem('settings', JSON.stringify(defaultSettings));
// }

// Create initial state
// const initialState = { settings: JSON.parse(localStorage.getItem('settings')) };
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
