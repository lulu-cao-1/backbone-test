// Creating a new model class
var Song = Backbone.Model.extend({
  // initialize: function(){
  //   console.log("A new song has been created.");
  // },
  idAttribute: "songId",
  urlRoot: "/api/songs",
  defaults: {
    genre: "Country",
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

// Adding a new song
var song = new Song({
  songId: 1,
  title: "Lost in the Sea"
});

song.set({
  artist: "Sisi",
  publishYear: 1996
})

song.set("description", "Mona ventured out but got lost in the sea.")

// Adding a new song that inherits from the Song class
var CountrySong = Song.extend({
  sing: function() { // Overriding the sing method of the parent class
    console.log("Singing a country song.");
    Song.prototype.sing.apply(this); // Calling the parent class method
  }
});

var countrySong = new CountrySong({
  songId: 2,
  title: "Never Falling Sun"
});

countrySong.sing();

// Creating a new collection class
var Songs = Backbone.Collection.extend({
  model: Song
});

var songs = new Songs([
  new Song({ songId: 3, title: "KC is Hot in the Summer", artist: "Orange" }),
  new Song({ songId: 4, title: "The Burning Sun", downloads: 100 })
]);

songs.add(new Song({ songId: 5, title: "Waiting for Autumn", artist: "Orange", downloads: 50 })); // Adding a song at the end of the collection
songs.add(new Song({ songId: 6, title: "Well, That's Climate Change for Ya", artist: "Orange", downloads: 70 }), { at: 0 }); // Adding a song at a specific index
songs.push(new Song({ songId: 7, title: "I'm Going to Michigan Tomorrow" })); // Adding a song at the end of the collection

console.log('All songs in the collection', songs);
console.log('All songs in the collection', songs.toJSON());
console.log('The song with cid c4', songs.get("c4")); // Getting a song by cid
songs.remove(songs.get(3));
console.log('Removed the song with id 3');
console.log('The first song in the collection', songs.at(0)); // Getting a song by index
console.log('The song with id 7', songs.get(7)); // Getting a song by id
console.log('Removed the last song', songs.pop());
console.log('The songs by the artist Orange', songs.where({ artist: "Orange" })); // Getting all songs with a specific attribute
console.log('The first song by the artist Orange', songs.findWhere({ artist: "Orange" })); // Getting the first song with a specific attribute
console.log('Songs with more than 70 downloads', songs.filter(function(song) {
  return song.get("downloads") >= 70;
}));
songs.each(function(song) {
  console.log(song.toJSON());
});

// Creating a new view class
var SongView = Backbone.View.extend({
  tagName: "span",
  className: "song",
  id: "1234",
  attributes: {
    "data-genre": "Country"
  },
  render: function() {
    this.$el.html("heyo good night");
    return this;
  }
});

// var songView = new SongView({ el: "#container" });
// songView.render();

var songView2 = new SongView();
songView2.render();
$("#container").html(songView2.$el);
