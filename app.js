// getting elements from signup page
const signupLink = document.querySelector('#signup-link');
const profileLink = document.querySelector('#profile-link');
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const mail = document.querySelector('#mail');
const password = document.querySelector('#pass');
const confirmPass = document.querySelector('#Confirm-pass');
const error = document.querySelector('.error');
const success = document.querySelector('.success');
const submitBtn = document.querySelector('#submitBtn');


// function to generate token
function generateToken(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789';

    let res = '';
    let length = characters.length;
    for(let i = 1; i<=16; i++){
        res += characters.charAt(Math.floor(Math.random()*length));
    }
    return res;
}


// function to validate mail is a valid mail type or not
function validateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.#$'*+?_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {  
      return true;
  
    } else {
        return false;
    }
  
}  

// functionality of submit and error handling with submit button
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    // if any field is empty or all fields are empty
    if(username.value == '' || mail.value == '' || password.value=='' || confirmPass.value==''){
        error.innerHTML = `Error: All fields are mandatory!`
        return;
    }

    // checking mail id if it is even a mail id or not
    if(!validateEmail(mail.value)){
        error.innerHTML = `Error: Enter Valid mail please!`
        mail.focus();
        return;
    }
    
    // checking if password length is less(weak password)
    if(password.value.length<8){
        error.innerHTML = `Error: Password length must be atleast 8 characters!`;
        password.focus();
        return;
    }

    // checking if password and current password are matching
    if(password.value !== confirmPass.value){
        error.innerHTML = `Error: Password doesn't match!`;
        confirmPass.focus();
        return;
    }

    error.innerHTML = '';
    // generating user details object
    let userInfo = {
        userName: username.value,
        mailId: mail.value,
        pass: password.value,
    };
    // getting access token
    const accessToken = generateToken();

    // storing in local storage
    localStorage.setItem('user', JSON.stringify(userInfo));
    localStorage.setItem('accessToken', accessToken);

    success.innerHTML = 'Successfully signedup!!'
    // redirecting to profile
    let link = document.createElement('a');
    link.href = './profile.html';
    form.appendChild(link);
    link.click();
    form.removeChild(link);
});


// functionality for the profile link on navbar 
profileLink.addEventListener('click', ()=>{
    if(!localStorage.getItem('accessToken')){
        profileLink.href = '#';
        alert('You dont have an account yet. \n Signup to create one!')
    }else{
        profileLink.href = './profile.html';
    }
})

// functionality for the signup link on navbar 
signupLink.addEventListener('click', ()=>{
    if(!localStorage.getItem('accessToken')){
        signupLink.href = './index.html';
    }else{
        signupLink.href = '#';
        alert('You already have an account! \n Go to your Profile')
    }
})