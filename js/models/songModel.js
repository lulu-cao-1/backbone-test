define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  // Creating a new model class
  var Song = Backbone.Model.extend({
    // initialize: function(){
    //   console.log("A new song has been created.");
    // },
    idAttribute: "songId",
    urlRoot: "/api/songs",
    defaults: {
      genre: "Country",
      listeners: 0
    },
    validate: function(attrs){
      if (!attrs.title) {
        return "Title is required.";
      }
    },
    sing: function() {
      console.log("Singing '" + this.get("title") + "'");
    }
  });

  // Adding a new CountrySong class that inherits from the Song class
  var CountrySong = Song.extend({
    sing: function() { // Overriding the sing method of the parent class
      console.log("Singing a country song.");
      Song.prototype.sing.apply(this); // Calling the parent class method
    }
  });

  // Creating a new collection class
  var Songs = Backbone.Collection.extend({
    model: Song
  });

  return {
    Song: Song,
    CountrySong: CountrySong,
    Songs: Songs
  };
});
