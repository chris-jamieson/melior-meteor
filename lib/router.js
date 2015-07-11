/**
 * Configuration
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'spinner',
    notFoundTemplate: 'notFound',
});

Router.onRun(function() {
    this.next();
});

/**
 * enforce admin-only pages
 */
Router.onBeforeAction(function() {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
        this.next();
    } else {
        this.render('accessDenied');
        this.stop();
    }
}, {
    only: [] // TODO add admin routes here
});

Router.onBeforeAction(function() {
    if (!Meteor.user()) {
        // if the user is not logged in, render the Login template
        this.render('entrySignIn');
    } else {
        // otherwise don't hold up the rest of hooks or our route/action function from running
        this.next();
    }
}, {
    except: [
            'home',
            'signout-path-redirect',
            'entrySignIn',
            'entrySignOut',
            'entrySignUp',
            'entryForgotPassword',
            'entryResetPassword',
        ] // TODO add anonymous routes here
});

/** Example route **/
Router.route('/', {
  name: 'home',
  waitOn: function() {
    return [];
  },
  action: function() {
    if (this.ready()) {
      this.render('home', {
        data: {},
      });
    }
    else {
      this.render('spinner');
    }
  }
});
