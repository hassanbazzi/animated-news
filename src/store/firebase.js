import firebase from 'firebase/app'
require('firebase/database')

const config = {
  apiKey: 'AIzaSyDJok4pdTUUkZ0w27FZg27n2WhqHqG39BI',
  authDomain: 'news-preact.firebaseapp.com',
  databaseURL: 'https://news-preact.firebaseio.com',
  projectId: 'news-preact',
  storageBucket: 'news-preact.appspot.com',
  messagingSenderId: '923027048544'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
