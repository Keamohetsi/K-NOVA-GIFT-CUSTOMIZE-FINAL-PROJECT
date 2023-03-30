
var connection = mysql.createConnection({
    host     : 'yourhostname',
    user     : 'yourusername',
    password : 'Dn8778754fds4%^&',
    database : 'simple_login_system_v1'
  });
   
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyB8inA14v0mzyb-mk8OEBlrsl4lstNpUmQ",
    authDomain: "keamohetsi-moletsane.firebaseapp.com",
    projectId: "keamohetsi-moletsane",
    storageBucket: "keamohetsi-moletsane.appspot.com",
    messagingSenderId: "1064936861976",
    appId: "1:1064936861976:web:8749c16fb251ed017d6e6d",
    measurementId: "G-WF0E1J117G"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  
  //LOGIN CREDENTIALS
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("login");
  
  //REGISTER ACCOUNT
  const signupEmailIn = document.getElementById("email-sign_up");
  const confirmSignupEmailIn = document.getElementById("confirm-email-sign_up");
  const signUpPasswordIn = document.getElementById("password-sign_up");
  const confirmSignUpPasswordIn = document.getElementById("confirg-password-sign_up");
  const createAccountButtonIn = document.getElementById("create-account-button");
  
  const main = document.getElementById("main");
  const createAccount = document.getElementById("create-account");
  
  const signUpButton = document.getElementById("sign_up");
  const returnButton = document.getElementById("return-button");
  
  var email,
    password,
    sign_upEmail,
    sign_upPassword,
    confirmSignupEmail,
    confirmSignUpPassword;
  
  createAccountButtonIn.addEventListener("click", function () {
    var isVerified = true;
  
    sign_upEmail = signupEmailIn.value;
    confirmSignupEmail = confirmSignupEmailIn.value;
    if (sign_upEmail != confirmSignupEmail) {
      window.alert("Email fields do not match. Try again.");
      isVerified = false;
    }
  
    sign_upPassword = signUpPasswordIn.value;
    confirmSignUpPassword = confirmSignUpPasswordIn.value;
    if (sign_upPassword != confirmSignUpPassword) {
      window.alert("Password fields do not match. Try again.");
      isVerified = false;
    }
  
    if (
      sign_upEmail == null ||
      confirmSignupEmail == null ||
      sign_upPassword == null ||
      confirmSignUpPassword == null
    ) {
      window.alert("Please fill out all required fields.");
      isVerified = false;
    }
  
    if (isVerified) {
      createUserWithEmailAndPassword(auth, sign_upEmail, sign_upPassword)
        ..then((userCredential) => {
            // Signed in
            // const user = userCredential.user;
            // ...
            window.alert("Success! Account created.");
            window.location = "./signup.html";
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            window.alert("Error occurred. Try again.");
            window.alert(errorMessage);
          });
      }
    });
    
    submitButton.addEventListener("click", function () {
      email = emailInput.value;
      
      // console.log(email);
      password = passwordInput.value;
      // console.log(password);
    
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          // Signed in
          const user = userCredential.user;
    
          window.alert("Success! Welcome back!");
          window.location = "./signin.html";
    
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          window.alert("Error occurred. Try again.");
        });
    });
    
    sign_UpButton.addEventListener("click", function(){
        main.style.display = "none";
        createAccount.style.display = "block";
    
    })
    sign_UpButton.addEventListener("click", function(){
        main.style.display = "block";
        createAccount.style.display = "none";
    
    })