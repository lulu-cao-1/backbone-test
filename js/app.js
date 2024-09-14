define([
  'underscore',
  'backbone',
  'models/songModel',
  'views/songView',
], function(_, Backbone, songModel, SongView) {
  var initialize = function() {
    var Song = songModel.Song;
    var CountrySong = songModel.CountrySong;
    var Songs = songModel.Songs;

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

    var countrySong = new CountrySong({
      songId: 2,
      title: "Never Falling Sun"
    });

    countrySong.sing();

    var songs = new Songs([
      new Song({ songId: 3, title: "KC is Hot in the Summer", artist: "Orange" }),
      new Song({ songId: 4, title: "The Burning Sun", downloads: 100 })
    ]);

    songs.add(new Song({ songId: 5, title: "Waiting for Autumn", artist: "Orange", downloads: 50 })); // Adding a song at the end of the collection
    songs.add(new Song({ songId: 6, title: "Well, That's Climate Change for Ya", artist: "Orange", downloads: 70 }), { at: 0 }); // Adding a song at a specific index
    songs.push(new Song({ songId: 7, title: "I'm Going to Michigan Tomorrow" })); // Adding a song at the end of the collection

    console.log('The song with cid c4', songs.get("c4")); // Getting a song by cid
    songs.remove(songs.get(3));
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

    // Inserting the view's element into the DOM; if #song isn't found, the jQuery object will be created but it won't be inserted into the DOM
    var songView = new SongView({ el: "#song", model: song });
    songView.render();

    // var songsView = new SongsView({ model: songs });
    // songsView.render();
    // $("#songs").html(songsView.$el);
  }

  return {
    initialize: initialize // Exposing private functions
  };
});
