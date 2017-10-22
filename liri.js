var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
// fs is a core Node package for reading and writing files
var fs = require("fs");


var args = process.argv;

if(args[2] === 'my-tweets'){
    handleTwitter();
} else if (args[2] === 'spotify-this-song'){
    handleSpotify();
} else if (args[2] === 'movie-this'){
    handleOmdb();
} else if (args[2] === 'do-what-it-says'){
    handleTxtFile();
} else {
    //account for crap entered by users with a function "Sorry I didn't understand arg[2] then show available commands
    handleMisc();
}

function handleTwitter(){

    //Twitter
    var client = new Twitter(keys.twitter);

    var params = {screen_name: 'BootcampBih'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {

        if (!error && response.statusCode === 200 ) {

            console.log("LIST OF TWEETS");

            for (var i = 0; i < tweets.length; i ++ ){

                console.log(tweets[i].text,'\n');
            }
        }
    });
}

function handleSpotify(){

    var spotify = new Spotify(keys.spotify);

    var song = args[3] || 'The Sign';

    spotify
        .search({ type: 'track', query: song })
        .then(function(response) {

             console.log("ARTIST(S):");
             for (var i = 0; i < response.tracks.items[0].artists.length; i++){
                 console.log(response.tracks.items[0].artists[i].name);
             }
             console.log("SONG NAME:\n",response.tracks.items[0].name);

            console.log("PREVIEW LINK:\n",response.tracks.items[0].album.external_urls.spotify);
            console.log("ALBUM:\n",response.tracks.items[0].album.name);

        })
        .catch(function(err) {
            console.log(err);
        });
}

function handleOmdb (){

    var movie = args[3] || 'Mr.+Nobody';

    var url = 'http://www.omdbapi.com/?apikey=' + keys.omdb + '&t=' + movie;

    //don't perform ajax call. Use requests
    request(url, function(error, response, body) {
        // If the request is successful
        if (!error && response.statusCode === 200) {

            //console.log("response", response);
            //console.log("body", JSON.parse(body));

            var res = JSON.parse(body);

            console.log("Title:", res.Title);
            console.log("Release Year:", res.Year);
            console.log("IMDB Rating:", res.imdbRating);


            for (var i =0; i < res.Ratings.length; i++){
                if (res.Ratings[i].Source === "Rotten Tomatoes"){
                    console.log("Rotten Tomatoes Rating:" , res.Ratings[i].Value);
                }
            }
            console.log("Country:", res.Country);
            console.log("Language:", res.Language);
            console.log("Plot:", res.Plot);
            console.log("Actors:", res.Actors);
            //console.log("res",res);
        }
    });
}

function handleTxtFile (){
    fs.readFile("random.txt", "utf8", function(error, data){

        if(error) {
            return console.log(error);
        }
        //log contents of data
        console.log(data);

    })
}

function handleMisc (){
    console.log("Sorry I didn't understand your input. The available commands are: my-tweet, spotify-this-song, movie-this and do-what-it-says");
}

