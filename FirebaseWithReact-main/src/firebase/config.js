import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig ={
    apiKey: 'AIzaSyCMORKhDqxQ5ndcBa1rifvvIcOWlk-bwu4',
    authDomain: 'your-auth-domain-b1234.firebaseapp.com',
    databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'auth-reactnative11',
    storageBucket: 'auth-react-native1994.appspot.com',
    messagingSenderId: '12897684839',
    appId: '1:12897684839:android:66e7414f1157819977f3c2',
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export {firebase};