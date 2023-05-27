// getting all required items from profile page
const signupLink = document.querySelector('#signup-link');
const profileLink = document.querySelector('#profile-link');
const displayName = document.querySelector('.info #u-name');
const displayMail = document.querySelector('.info #mail');
const displayPass = document.querySelector('.info #pass');
const logoutBtn = document.querySelector('#logout');

// if we have access token in local storage we are displaying the user details 
if(localStorage.getItem('accessToken')){
    let localobj = JSON.parse(localStorage.getItem('user'));
    displayName.innerHTML = `Full Name: ${localobj.userName}`;
    displayMail.innerHTML = `Email: ${localobj.mailId}`;
    displayPass.innerHTML = `Password: ${localobj.pass}`;
    
}

// logout functionality
logoutBtn.addEventListener('click', ()=>{
    localStorage.clear(); //cleared the user and token from local storage 

    // redirecting
    let link = document.createElement('a');
    link.href = './index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

// functionality for the profile link on navbar 
profileLink.addEventListener('click', ()=>{
    if(!localStorage.getItem('accessToken')){
        profileLink.href = './index.html';
    }else{
        profileLink.href = '#';
        alert('You are on your Profile!')
    }
})


// functionality for the signup link on navbar 
signupLink.addEventListener('click', ()=>{
    if(!localStorage.getItem('accessToken')){
        signupLink.href = './index.html';
    }else{
        signupLink.href = '#';
        alert('You are already signedup!!')
    }
})