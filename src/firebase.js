import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBYM-fU-B_B5PBHaUgNY8mSzflm1XZOLWY",
  authDomain: "saitejakalepu-portfolio.firebaseapp.com",
  databaseURL: "https://saitejakalepu-portfolio-default-rtdb.firebaseio.com",
  projectId: "saitejakalepu-portfolio",
  storageBucket: "saitejakalepu-portfolio.appspot.com",
  messagingSenderId: "701383325828",
  appId: "1:701383325828:web:77ea0311781f0a95736ad1",
  measurementId: "G-XV2NREL0X6"
};

// Initialize Firebase
const firebaseData = firebase.initializeApp(firebaseConfig);



export default firebaseData;