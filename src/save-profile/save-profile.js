function saveProfile(profileObj, key) {
    const json = JSON.stringify(profileObj);
    window.localStorage.setItem(key, json);
}

export default saveProfile;