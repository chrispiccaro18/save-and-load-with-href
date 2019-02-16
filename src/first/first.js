
import profileKey from '../profile-key.js';
import loadProfile from '../load-profile/load-profile.js';
import saveProfile from '../save-profile/save-profile.js';
import addHrefToProfile from '../add-href-to-profile/add-href-to-profile.js';

const firstGreeting = document.getElementById('first-greeting');

const userProfile = loadProfile(profileKey);
if(userProfile === 'index.html') {
    window.location = userProfile;
}

const firstGreetingP = document.createElement('p');
firstGreetingP.textContent = 'Hello ' + userProfile.name;
firstGreeting.appendChild(firstGreetingP);

addHrefToProfile(userProfile);
saveProfile(userProfile, profileKey);