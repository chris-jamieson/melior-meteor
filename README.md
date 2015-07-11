# Basic initialisation

* run `meteor create yourAppName`
* run `cd yourAppName`
* run `rm yourAppName.css yourAppName.html yourAppName.js`
* copy all of the files and folders from this repo into your directory (`yourAppName`)
* run ```meteor add accounts-password alanning:roles aldeed:collection2 chrismbeckett:toastr email fortawesome:fontawesome ian:accounts-ui-bootstrap-3 iron:router joshowens:accounts-entry momentjs:moment peppelg:bootstrap-3-modal reactive-var sacha:spin twbs:bootstrap utilities:avatar wylio:mandrill```
* run ```meteor remove autopublish insecure```
* add your settings in `config/settings-development.json`
* add your site name in the `<title></title>` tag in `client/main.html`
* run ```meteor run --settings config/settings-development.json```
