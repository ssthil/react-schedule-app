import * as firebase from 'firebase'
import * as c from './constants'

// Initialize Firebase
const config = {
  apiKey: c.apiKey,
  authDomain: c.authDomain,
  databaseURL: c.databaseURL,
  projectId: c.projectId,
  storageBucket: c.storageBucket,
  messagingSenderId: c.messagingSenderId
}

firebase.initializeApp(config)


export default { firebase }