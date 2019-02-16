import profileKey from './profile-key.js';
import saveProfile from './save-profile/save-profile.js';

const userProfileForm = document.getElementById('user-profile');

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