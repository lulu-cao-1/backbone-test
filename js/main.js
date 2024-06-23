// Creating a new model class
var Song = Backbone.Model.extend({
  initialize: function(){
    console.log("A new song has been created.");
  },
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

var Vehicle = Backbone.Model.extend({
  idAttribute: "registrationNumber",
  urlRoot: "/api/vehicles",
  validate: function(attrs) {
    if (!attrs.registrationNumber) {
      return "Vehicle is not valid.";
    }
  },
  start: function() {
    console.log("Vehicle started.");
  }
});

var Car = Vehicle.extend({
  start: function() {
    console.log("Car with registration number " + this.get("registrationNumber") + " started.");
  }
});

var car = new Car({
  registrationNumber: "XLI887",
  color: "Blue"
});

car.unset("registrationNumber");
if (!car.isValid()) {
  console.log(car.validationError);
}

car.set("registrationNumber", "XLI887");

if (!car.isValid()) {
  console.log(car.validationError);
} else {
  console.log("Car is valid.");
  car.start();
}
