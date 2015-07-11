Template.registerHelper('dateFormatCalendar', function(context, options) {
    if (context) {
        return moment(context).calendar();
    }
});

Template.registerHelper('pluralise', function(singularWord, pluralWord, count) {
    if (count == 1) {
        return singularWord;
    } else {
        return pluralWord;
    }
});

Template.registerHelper('siteName', function(context, options) {
    if (Meteor.settings.public.site.name) {
        return Meteor.settings.public.site.name;
    } else {
        return "This site";
    }
});
