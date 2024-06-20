// Creating a new model class
var Song = Backbone.Model.extend({
  initialize: function(){
    console.log("A new song has been created.");
  },
  defaults: {
    genre: "Country",
  },
  validate: function(attrs){
    if (!attrs.title) {
      return "Title is required.";
    }
  },
  sing: function(){
    console.log("Singing '" + this.get("title") + "'");
  }
});

// Adding a new song
var song = new Song({
  title: "Lost in the Sea"
});

song.set({
  artist: "Sisi",
  publishYear: 1996
})

song.set("description", "Mona ventured out but got lost in the sea.")

// Adding a new song that inherits from the Song class
var CountrySong = Song.extend({
  sing: function(){ // Overriding the sing method of the parent class
    console.log("Singing a country song.");
    Song.prototype.sing.apply(this); // Calling the parent class method
  }
});

var countrySong = new CountrySong({
  title: "Never Falling Sun"
});

countrySong.sing();
