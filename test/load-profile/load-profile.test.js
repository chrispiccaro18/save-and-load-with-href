import saveProfile from '../../src/save-profile/save-profile.js';
import loadProfile from '../../src/load-profile/load-profile.js';

const test = QUnit.test;

QUnit.module('Load profile from local storage');

test('Return javascript object on successful load', function(assert) {
    const object = {
        name: 'james',
        age: '20'
    };
    const objectKey = 'object';
    saveProfile(object, objectKey);
    const loadedObject = loadProfile(objectKey);
    assert.deepEqual(loadedObject, object);
});

test('Return a string to index.html if local storage is empty', function(assert) {
    const objectKey = 'missing';
    const indexString = loadProfile(objectKey);
    assert.equal(indexString, 'index.html');
});