/*src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"
src="https://www.gstatic.com/firebasejs/7.14.2/firebase-analytics.js"
src="https://www.gstatic.com/firebasejs/7.14.2/firebase-auth.js"
src="https://www.gstatic.com/firebasejs/7.14.2/firebase-firestore.js" */

var firebase = require('firebase');


var firebaseConfig = {
    apiKey: "AIzaSyCiJ3XXznA9PyIJ49v1zGdJEFoV8skHqY8",
    authDomain: "trasher-92594.firebaseapp.com",
    databaseURL: "https://trasher-92594.firebaseio.com",
    projectId: "trasher-92594",
    storageBucket: "trasher-92594.appspot.com",
    messagingSenderId: "327023580762",
    appId: "1:327023580762:web:4b6ad0748288a5fa2baa63"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth(); 


  const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const signInWithMail = document.getElementById('signIn');
const signInWithGoogleBtn = document.getElementById('signInWithGoogle');
const signInWithTwitterBtn = document.getElementById('signInWithTwitter');
const signInWithFacebookBtn = document.getElementById('signInWithFacebook');
//const signUp = document.getElementById('signUp');
const logOut = document.getElementById('logout');


//Sign in function
const signInWithEmailFunction = () => {
  const email = emailField.value;
  const password = passwordField.value;

  //Built in firebase function responsible for authentication
  auth.signInWithEmailAndPassword(email, password)
  .then(() => {
    location.href='main.html';
  })
  .catch(error => {
    console.error(error);
  })
}

const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
  
    auth.signInWithPopup(googleProvider)
    .then(() => {
		location.href='main.html';
      console.log('You\'re now signed in !');
    })
    .catch(error => {
      console.error(error);
    });
  }

const signInWithFacebook = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    
    auth.signInWithPopup(facebookProvider)
    .then(() => {
	location.href='main.html';
    console.log('Signed in successfully !');
    })
    .catch(error => {
    console.error(error);
    });
}
/* won't work, I won't receieve access to Twitter account for developers on time
const signInWithTwitter = () => {
    const twitterProvider = new firebase.auth.TwitterAuthProvider();
    //Or auth.signInWithRedirect(twitterProvider)
    auth.signInWithPopup(twitterProvider)
    .then(() => {
      console.log('Signed in successfully !');
    })
    .catch(error => {
      console.error(error);
    });
  }
  */

  auth.onAuthStateChanged(user => {
    console.log(user);
    
    if(user.displayName)
        console.log(user.displayName);
  });
  
  /*logOut.addEventListener('click', () => {
    auth.signOut()
    .then(() => {
        console.log('User signed out successfully !');
    })
    .catch(error => {
        console.error(error);
    });
  })
  */




const sendVerificationEmail = () => {
    //Built in firebase function responsible for sending the verification email
    auth.currentUser.sendEmailVerification()
    .then(() => {
        console.log('Verification Email Sent Successfully !');
    })
    .catch(error => {
        console.error(error);
    });
}


  
signInWithGoogleBtn.addEventListener('click', signInWithGoogle);

signInWithMail.addEventListener('click', signInWithEmailFunction);

signInWithFacebookBtn.addEventListener('click', signInWithFacebook);

signInWithTwitterBtn.addEventListener('click', signInWithTwitter);



