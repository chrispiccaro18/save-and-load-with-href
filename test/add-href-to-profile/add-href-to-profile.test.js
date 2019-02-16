import addHrefToProfile from '../../src/add-href-to-profile/add-href-to-profile.js';

const test = QUnit.test;

test('Update profile with current href', function(assert) {
    const profile = {
        name: 'doug',
        age: '55'
    };
    addHrefToProfile(profile);
    assert.deepEqual(profile, { name: 'doug', age: '55', currentHref: window.location.href });
});