const firstGreeting = document.getElementById('first-greeting');

const json = window.localStorage.getItem('userProfile');
let userProfile = {};
if(json) {
    userProfile = JSON.parse(json);
} else {
    window.location = 'index.html';
}

const firstGreetingP = document.createElement('p');
firstGreetingP.textContent = 'Hello ' + userProfile.name;
firstGreeting.appendChild(firstGreetingP);