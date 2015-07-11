# Melior Meteor
As I create more and more Meteor applications as part of my work with [Melior Enterprises](http://meliorenterprises.com), I thought it would be useful to put together a "quickstart" kit of all the basic setup and boilerplate that I use in pretty much every Meteor project.

## Quickstart

* run `meteor create yourAppName`
* run `cd yourAppName`
* run `rm yourAppName.css yourAppName.html yourAppName.js`
* copy all of the files and folders from this repo into your directory (`yourAppName`)
* run ```meteor add accounts-password alanning:roles aldeed:collection2 chrismbeckett:toastr email fortawesome:fontawesome ian:accounts-ui-bootstrap-3 iron:router joshowens:accounts-entry momentjs:moment peppelg:bootstrap-3-modal reactive-var sacha:spin twbs:bootstrap utilities:avatar wylio:mandrill```
* run ```meteor remove autopublish insecure```
* add your settings in `config/settings-development.json`
* add your site name in the `<title></title>` tag in `client/main.html`
* run ```meteor run --settings config/settings-development.json```
