Application.SearchResultsController = Ember.ArrayController.extend({
    addObject: function(obj) {
        if (this.content.length == 0) {
            this.set('content', [obj]);
        } else {
            this.get('content').push(obj);
        }
    }
});