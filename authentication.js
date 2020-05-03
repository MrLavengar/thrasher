
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const signInWithMail = document.getElementById('signIn');
const signInWithGoogleBtn = document.getElementById('signInWithGoogle');
const signInWithTwitterBtn = document.getElementById('signInWithTwitter');
const signInWithFacebookBtn = document.getElementById('signInWithFacebook');
//const signUp = document.getElementById('signUp');
const logOut = document.getElementById('logout');

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


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
    console.log('Signed in successfully !');
    })
    .catch(error => {
    console.error(error);
    });
}

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

  auth.onAuthStateChanged(user => {
    console.log(user);
    
    if(user.displayName)
        console.log(user.displayName);
  });
  
  logOut.addEventListener('click', () => {
    auth.signOut()
    .then(() => {
        console.log('User signed out successfully !');
    })
    .catch(error => {
        console.error(error);
    });
  })
  




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