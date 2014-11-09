var ContentView = require("./views/content/view"),
    SettingsView = require("./views/settings/view"),
    SettingsModel = require("./models/settings");

function onDocumentReady() {
    var app = {
        views: {},
        models: {}
    };

    app.views.content = new ContentView({
        el: $("#content")
    });

    app.views.settings = new SettingsView({
        model: SettingsModel,
        el: $("#settings")
    });

    window.app = app;

    // Display main page
    app.views.content.render();
}

// init
$(document).ready(onDocumentReady);
