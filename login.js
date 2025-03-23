// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD90XlnVOGUvoHjm8kkbi_e_0fDg1fUHDk",
  authDomain: "login-bbe63.firebaseapp.com",
  projectId: "login-bbe63",
  storageBucket: "login-bbe63.firebasestorage.app",
  messagingSenderId: "456113966589",
  appId: "1:456113966589:web:383828e6ac61dd3c3b1d94",
  measurementId: "G-755K006D5N"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// DOM Elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginContainer = document.querySelector('.login-container');
const signupContainer = document.querySelector('.signup-container');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');

// Switch between Login and Signup forms
signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

// Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('Login successful!');
            // Redirect or do something else
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

// Signup
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert('Signup successful!');
            // Redirect or do something else
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});