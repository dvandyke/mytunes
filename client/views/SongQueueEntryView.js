// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td class="col-narrow-2"><%= artist %></td><td class="col-wide-2"><%= title %></td>'),

  events: {
    'click': function() {
      this.model.removeSong(this.model);
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
