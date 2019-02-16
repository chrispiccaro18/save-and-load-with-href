import saveProfile from '../../src/save-profile/save-profile.js';

const test = QUnit.test;

QUnit.module('Saving an object in local storage');

test('Save object in local storage', function(assert) {
    const object = {
        name: 'chris',
        age: '19'
    };
    const objectKey = 'userProfile';
    const expected = JSON.stringify(object);
    saveProfile(object, objectKey);
    assert.equal(window.localStorage.getItem(objectKey), expected);
});