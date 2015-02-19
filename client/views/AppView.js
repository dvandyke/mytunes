// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    var appModel = this.model;
    this.playerView = new PlayerView({model: appModel.get('currentSong')});
    this.libraryView = new LibraryView({collection: appModel.get('library')});
    this.songQueueView = new SongQueueView({collection: appModel.get('queue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    //
    //
    //
    //

    appModel.get('songQueue').bind('add', function() {
      var queue = appModel.get('songQueue');
      console.log(queue);

      var len = queue.length;

      if (len === 1) {
        appModel.set('currentSong', queue.first());
        this.playerView.setSong(appModel.get('currentSong'));
      }

    }, this);


    // this.model.on('change:currentSong', function(model){
    //   this.playerView.setSong(model.get('currentSong'));
    // }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el
    ]);
  }

});
