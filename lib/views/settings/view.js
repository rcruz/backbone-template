var View,
    viewTemplate = require("./template.html"),
    viewUtils = require("../viewUtils");

View = Backbone.View.extend({
    initialize: function () {
    },
    render: function () {
        var renderedTemplate = viewTemplate({});
        this.$el.html(renderedTemplate);
    },
    show: function (model) {
        this.model = model || this.model;
        viewUtils.showElement(this.$el);
        this.render();
    },
    hide: function () {
        viewUtils.hideElement(this.$el);
    },
    events: {
    },
});

module.exports = View;
