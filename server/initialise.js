Accounts.emailTemplates.siteName = Meteor.settings.public.site.name;
Accounts.emailTemplates.from = Meteor.settings.site.siteEmailSender + " <" + Meteor.settings.site.siteEmailAddress + ">";

this.sendEmail = function(to, subject, htmlText) {
    return Meteor.Mandrill.send({
        to: to,
        from: Meteor.settings.site.siteEmailAddress,
        subject: subject,
        html: htmlText
    });
};

Meteor.startup(function() {
    // create an admin user if one does not exist
    var adminEmailAddress = Meteor.settings.site.superuserEmailAddress;
    var adminUser = Meteor.users.findOne({
        "emails.address": adminEmailAddress
    });
    var adminRoles = ["admin"];
    var adminUserId;

    if (typeof adminUser === 'undefined') {
        adminUserId = Accounts.createUser({
            email: adminEmailAddress,
            password: "20DefaultPassword15",
        });
    } else {
        adminUserId = adminUser._id;
    }

    if (adminRoles.length > 0) {
        // Need _id of existing user record so this call must come
        // after `Accounts.createUser` or `Accounts.onCreate`
        Roles.addUsersToRoles(adminUserId, adminRoles, Roles.GLOBAL_GROUP);
    }

    // Mandrill config
    Meteor.Mandrill.config({
        username: Meteor.settings.mandrill.username,
        key: Meteor.settings.mandrill.key
    });

});