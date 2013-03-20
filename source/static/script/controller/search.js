Application.SearchController = Ember.ObjectController.extend({
    needs: ['searchResults'],
    shouldDisable: false,
    search: function() {
        this.set('shouldDisable', true);

        this.get('content').get('transaction').commit();

        console.log(this.get('content.results').get('length'));

        this.get('controllers.searchResults').set('content', this.get('content.results'));

        console.log("searching for " + this.get('vrm'));
    },
    refresh: function() {
        console.log('Refreshing Search Results...');

        this.get('content').reload();

        this.get('controllers.searchResults').set('content', this.get('content.results'));
    }
});