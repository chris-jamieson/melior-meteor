/* publish Meteor roles */
Meteor.publish(null, function() {
    return Meteor.roles.find({});
});

/** user-specific publications */
Meteor.publish(null, function() {
    return Meteor.users.find({
        _id: this.userId
    }, {
        fields: {
            'profile.firstName': 1,
            'profile.lastName': 1
        }
    });
});

/**
 * Admin publications
 */
Meteor.publish('allUsers', function() {
    if (Roles.userIsInRole(this.userId, ['admin'])) {
        return Meteor.users.find({});
    } else {
        // user not authorized. do not publish
        this.stop();
        return;
    }
});