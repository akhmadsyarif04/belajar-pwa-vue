import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAP1zDxsbw7mKfNeiIya_BKhtGrdoruap8',
  authDomain: 'cropchat-76798.firebaseapp.com',
  databaseURL: 'https://cropchat-76798.firebaseio.com',
  projectId: 'cropchat-76798',
  storageBucket: 'cropchat-76798.appspot.com',
  messagingSenderId: '1052673319126'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
