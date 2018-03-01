import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC0tr1fQTxARcFQwi5bJ4fqnAq8DeOTsuI",
    authDomain: "ton-schedule-app.firebaseapp.com",
    databaseURL: "https://ton-schedule-app.firebaseio.com",
    projectId: "ton-schedule-app",
    storageBucket: "ton-schedule-app.appspot.com",
    messagingSenderId: "384595439683"
}

const fire = firebase.initializeApp(config);
const database = firebase.database();
const ref = database.ref('items');

//const result = ref.push({
//    item: "New value"
 // })

  ref.on('value', function(data){
    console.log(data.val());
    //const fetchData = data.val()
  })

export default { fire }