import loadProfile from '../load-profile/load-profile.js';
import profileKey from '../profile-key.js';
import addHrefToProfile from '../add-href-to-profile/add-href-to-profile.js';
import saveProfile from '../save-profile/save-profile.js';

const secondGreeting = document.getElementById('second-greeting');
const saveButton = document.getElementById('save-button');

const userProfile = loadProfile(profileKey);
if(userProfile === null) {
    window.location = 'index.html';
}

const secondGreetingP = document.createElement('p');
secondGreetingP.textContent = 'Hello ' + userProfile.name;
secondGreeting.appendChild(secondGreetingP);

saveButton.addEventListener('click', function() {
    addHrefToProfile(userProfile);
    saveProfile(userProfile, profileKey);
});