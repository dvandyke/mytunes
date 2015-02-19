// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function(){
    return this.$el;
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
  },
  // enqueue: function(){
  //   this.$el.html('<th>Library</th>').append(
  //     // Add songs when clicked in library
  //     // if there is already a song playing
  //     this.collection.map(function(song){
  //       return new SongQueueEntryView({model: song}).render();
  //     })
  //   );
  // },
  // dequeue: function(){

  // }

});
