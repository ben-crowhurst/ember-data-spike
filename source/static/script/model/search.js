Application.Search = DS.Model.extend({
    vrm: DS.attr('string'),
    results: DS.hasMany('Application.Result',{embedded:'load',nested:true}),
    becameError: function(manager) {
        console.log('Failed search operation with HTTP Status: ' + manager.xhr.status);
    },
    becameInvalid: function(manager) {
        console.log('Failed as search data became invalid!');
    }
});