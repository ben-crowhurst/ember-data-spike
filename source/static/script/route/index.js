Application.IndexRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render("index", {
            controller: this.controllerFor('search')
        });

        this.render("results", {
            outlet: "results",
            controller: this.controllerFor('searchResults'),
        });
    },
    setupController: function(controller, model) {
        this.controllerFor('search').set('content', Application.Search.createRecord());
    }
});