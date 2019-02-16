function loadProfile(key) {
    const json = window.localStorage.getItem(key);
    if(json) {
        return JSON.parse(json);
    }
    return 'index.html';
}

export default loadProfile;