const userProfileForm = document.getElementById('user-profile');

userProfileForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userProfileFormData = new FormData(userProfileForm);

    const userProfile = {
        name: userProfileFormData.get('user-name'),
        age: userProfileFormData.get('user-age')
    };

    saveProfile();
});