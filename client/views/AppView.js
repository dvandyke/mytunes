// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    var appModel = this.model;
    this.playerView = new PlayerView({model: appModel.get('currentSong')});
    this.libraryView = new LibraryView({collection: appModel.get('library')});
    this.songQueueView = new SongQueueView({collection: appModel.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    //
    //
    //
    //

    appModel.get('songQueue').bind('add', function() {
      var queue = appModel.get('songQueue');
      var len = queue.length;

      if (len === 1) {
        appModel.set('currentSong', queue.first());
        this.playerView.setSong(appModel.get('currentSong'));
      } else {
        // listen for ended event
        // dequeue current song
        // grab next in queue
        // pass to play next song function
        this.playerView.playNextSong();
      }


      this.songQueueView.render();


    }, this);

    appModel.get('songQueue').bind('remove', function(){
      var queue = appModel.get('songQueue');
      var len = queue.length;
      if(len>0){
        appModel.set('currentSong', queue.first());
        this.playerView.setSong(appModel.get('currentSong'));
      }
      this.songQueueView.render();
    }, this)

    // this.model.on('change:currentSong', function(model){
    //   this.playerView.setSong(model.get('currentSong'));
    // }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
