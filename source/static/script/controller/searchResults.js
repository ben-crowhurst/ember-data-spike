Application.SearchResultsController = Ember.ArrayController.extend({
    addObject: function(object) {
        this.set('content', [object]);
    }
});