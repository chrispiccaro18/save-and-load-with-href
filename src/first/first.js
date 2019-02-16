import loadProfile from '../load-profile/load-profile.js';

const firstGreeting = document.getElementById('first-greeting');

const userProfile = loadProfile('userProfile');
if(userProfile === 'index.html') {
    window.location = userProfile;
}

const firstGreetingP = document.createElement('p');
firstGreetingP.textContent = 'Hello ' + userProfile.name;
firstGreeting.appendChild(firstGreetingP);