// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="col-narrow"><%= artist %></td><td class="col-wide"><%= title %></td><td class="col-narrow"><%= this.model.playCount %></td>'),

  events: {
    'click': function() {
      this.model.enqueue(this);
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
