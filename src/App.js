import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { userAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

//firebase app
firebase.initializeApp ({
  //Firebase SDK snippet
  apiKey: "AIzaSyC-AosBqbXHSVcOkEmJc56H0TeEzhy5bQw",
  authDomain: "groupchat-e579e.firebaseapp.com",
  projectId: "groupchat-e579e",
  storageBucket: "groupchat-e579e.appspot.com",
  messagingSenderId: "700206828770",
  appId: "1:700206828770:web:493611a72ef9ce3526e2bb",
  measurementId: "G-5FRW68WYD1"

})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  //userid check
  const [user] = useAuthState(auth);

  //sgned in user is an object
  //signed out user is null
  // use this to control display page base on the sign in or out status
  // If users: show ChatRoom else: show SignIn

  return (
    <div className="App">
      <header className="App-header">
        <section>
        {user ? <ChatRoom /> : <SignIn />}
        </section>
       
      </header>
    </div>
  );
}



export default App;
