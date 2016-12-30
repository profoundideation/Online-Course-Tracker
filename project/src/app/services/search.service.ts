
// var fb = firebase.database.ref();

/**
 * @param {string} emailAddress
 * @return {Object} the object contains zero or more user records, the keys are the users' ids
 */

function findUsersMatchingEmail( emailAddress, callback ) {
    fb.child('user').orderByChild('emailAddress').equalTo(emailAddress).once('value', function(snap) {
        callback( snap.val() );
    });
}
