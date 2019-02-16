import loadProfile from '../load-profile/load-profile.js';
import profileKey from '../profile-key.js';
import addHrefToProfile from '../add-href-to-profile/add-href-to-profile.js';
import saveProfile from '../save-profile/save-profile.js';

const secondGreeting = document.getElementById('second-greeting');

const userProfile = loadProfile(profileKey);

const secondGreetingP = document.createElement('p');
secondGreetingP.textContent = 'Hello ' + userProfile.name + ' you came from:' + userProfile.currentHref;
secondGreeting.appendChild(secondGreetingP);

addHrefToProfile(userProfile);
saveProfile(userProfile, profileKey);