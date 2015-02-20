// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    var appModel = this.model;
    this.playerView = new PlayerView({model: appModel.get('currentSong')});
    this.libraryView = new LibraryView({collection: appModel.get('library')});
    this.songQueueView = new SongQueueView({collection: appModel.get('songQueue')});

    appModel.get('songQueue').bind('add', function() {
      var queue = appModel.get('songQueue');
      var len = queue.length;

      if (len === 1) {
        appModel.set('currentSong', queue.first());
        this.playerView.setSong(appModel.get('currentSong'));
      }

      this.songQueueView.render();
      this.libraryView.render();
    }, this);

    appModel.get('songQueue').bind('remove', function(song){
      var queue = appModel.get('songQueue');
      var len = queue.length;

      if(song !== undefined){
        this.playerView.setSong();
      }

      if(len > 0){
        appModel.set('currentSong', queue.first());
        this.playerView.setSong(appModel.get('currentSong'));
      }

      this.songQueueView.render();
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }
});
