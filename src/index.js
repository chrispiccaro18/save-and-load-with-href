import profileKey from './profile-key.js';
import saveProfile from './save-profile/save-profile.js';
import loadProfile from './load-profile/load-profile.js';

const userProfileForm = document.getElementById('user-profile');
const savedButton = document.getElementById('saved-button');

userProfileForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userProfileFormData = new FormData(userProfileForm);

    const userProfile = {
        name: userProfileFormData.get('user-name'),
        age: userProfileFormData.get('user-age')
    };

    saveProfile(userProfile, profileKey);

    window.location = 'first.html';
});

if(loadProfile(profileKey)) {
    savedButton.classList.remove('hidden');
}

savedButton.addEventListener('click', function() {
    const savedProfile = loadProfile(profileKey);
    window.location = savedProfile.currentHref;
});