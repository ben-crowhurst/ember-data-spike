Application.Result = DS.Model.extend({
    vrm: DS.attr('string'),
    make: DS.attr('string'),
    model: DS.attr('string'),
    colour: DS.attr('string'),
    search: DS.belongsTo('Application.Search', {embedded:'load',nested:true})
});