define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone, songModel) {
  // Creating a new SongView class and passing a model to it
  var SongView = Backbone.View.extend({ // Creating an element that is a span with the class, id, and data-genre attributes
    initialize: function() {
      this.model.on("change", this.render, this); // event name, callback, context
    },
    events: {
      "click": "onClick",
      "click .bookmark": "onClickBookmark"
    },
    onClick: function() {
      this.model.set("listeners", this.model.get("listeners") + 1); // backbone model stores attributes as a hash, so we need to use get and set to access and modify the model
    },
    onClickBookmark: function(e) {
      e.stopPropagation();
      console.log("Bookmark button clicked.");
    },
    tagName: "li",
    className: "song",
    attributes: {
      "data-genre": "Country"
    },
    render: function() {
      // this.$el.html(this.model.get("title") + ` - Listeners: ${this.model.get("listeners")} <button>Listen</button> <button class='bookmark'>Bookmark</button>`); // $el is a jQuery object that wraps the view's element
      // this.$el.attr("id", this.model.get("songId"));
      var source = $("#songTemplate").html();
      var template = _.template(source);
      var html = template(this.model.toJSON());
      this.$el.html(html);
      return this;
    }
  });

  // TODO: the instantiated 'song' needs to be added to the collection
  // Creating a new SongsView class and passing a collection to it
  // var SongsView = Backbone.View.extend({
  //   tagName: "ul",
  //   initialize: function() {
  //     this.model.on("add", this.onSongAdded, this);
  //     this.model.on("remove", this.onSongRemoved, this);
  //   },
  //   onSongAdded: function(song) {
  //     var songView = new SongView({ model: song });
  //     this.$el.append(songView.render().$el);
  //   },
  //   onSongRemoved: function(song) {
  //     // this.$el.find("li#" + song.get("songId")).remove();
  //     this.$("li#" + song.get("songId")).remove(); // This also works
  //   },
  //   render: function() {
  //     var self = this; // To access the view object inside the each function
  //     this.model.each(function(song) {
  //       var songView = new SongView({ model: song });
  //       self.$el.append(songView.render().$el); // Appending the view's element to the parent view's element
  //     })
  //   }});
  return SongView;
});
