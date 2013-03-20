Application.Adapter = DS.RESTAdapter.extend({
  didError: function (store, type, record, xhr) {
    console.log('Failed to perform record operation: ' + xhr.status);

    record.xhr = xhr;

    if (xhr.status === 422) {
      var data = JSON.parse(xhr.responseText);
      
      store.recordWasInvalid(record, data['errors']);
    } else {
      this._super.apply(this, arguments);
    }
  }
});

Application.Store = DS.Store.extend({
    revision: 12,
    adapter: 'Application.Adapter'
});

Application.Adapter.configure("plurals", {
  search: "searches"
});