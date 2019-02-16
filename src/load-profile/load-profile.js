function loadProfile(key) {
    const json = window.localStorage.getItem(key);
    let data = null;
    if(json) {
        data = JSON.parse(json);
    }
    return data;
}

export default loadProfile;