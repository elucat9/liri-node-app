//  npm package 
var request = require("request");

//store arguments
var arg = process.argv

//empty variable 
var movie = "";

//if the searched movie, artist, song, etc has more than 1 word, loop through them
//start search with 3rd argument, i=3
for (var i = 3; i < arg.length; i++) {
    if (i > 3 && i < arg.length) { 
      movie = movie + "+" + arg[i];
    }
    else {
      movie += arg[i];
    }
  }

var artist = "";
for (var i = 3; i < arg.length; i++) {
    if (i > 3 && i < arg.length) { 
      artist = artist + "+" + arg[i];
    }
    else {
      artist += arg[i];
    }
  }

  var albums = "";
  for (var i = 3; i < arg.length; i++) {
      if (i > 3 && i < arg.length) { 
        albums = albums + "+" + arg[i];
      }
      else {
        albums += arg[i];
      }
    }

  
var command = process.argv[2];

if (command === "movie-this"){

    //request for OMDB API with trilogy as key

    request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function(error, response, body) {     
    if (!error && response.statusCode === 200) {

        
    //get syntax for parsing the body
    //console.log(JSON.parse(body));

    //output: title, year, IMDB rating, Rotten Tomato rating, country produced, language, plot, actors
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomato Rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("Country Produced: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    }
    });

} else if (command === "concert-this") {
     //request for Bands in Town Artist Events API

     request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function(error, response, body) {     
        if (!error && response.statusCode === 200) {
    
            
        //get syntax for parsing the body
        //console.log(JSON.parse(body));

        //Output: Name, location and date (MM/DD/YYYY) of the event
        console.log("Venue Name: " + JSON.parse(body)[0].venue.name);
        console.log("Location: " + JSON.parse(body)[0].venue.city + ", " + JSON.parse(body)[0].venue.region + ", " + JSON.parse(body)[0].venue.country);
        var str = JSON.parse(body)[0].datetime;
        var date = str.split("T",1);
        console.log("Date: " + date);
            
      }
    });
} 


// else if (command === "spotify-this"){
// //spotify-this-song
// request("https://api.spotify.com/v1/artists/https://api.spotify.com/v1/tracks/0e3d6d1879014b018f4b7672cafd6e70/", function(error, response, body) {     
//         if (!error && response.statusCode === 200) {
//             //Output: artist(s), song name, preview link, album
//         console.log(JSON.parse(body));  
            
//         }
//     });
// }
    
    //If no song is provided then your program will default to "The Sign" by Ace of Base.
            
        //utilize node-spotify-api package to retrieve song information from Spotify API.
            //first sign up as a developer 
            
    //import the keys.js file for the Spotify API keys and store it in a variable.
    //access keys info
    //require("dotenv").config(); 


//else if (command === "do-this"){
//run the command and arguments in random.txt

//}

else {
    console.log("error")

}


 
    



  
   
   
       
