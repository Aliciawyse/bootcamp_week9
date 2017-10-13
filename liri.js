var stuffINeed = require("./keys.js");

var commands = process.argv[2];

if(commands === 'my-tweets'){

    //Twitter
    var myKey = stuffINeed.consumer_key;

    var Twitter = require('twitter');

    var client = new Twitter({
        consumer_key: myKey,
        consumer_secret: stuffINeed.consumer_secret,
        access_token_key: stuffINeed.access_token_key,
        access_token_secret: stuffINeed.access_token_secret
    });

    var params = {screen_name: 'BootcampBih'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {

        if (!error && response.statusCode === 200 ) {

            for (var i = 0; i < tweets.length; i ++ ){

                console.log(tweets[i].text);
            }
        }
    });
}


//
// if(operator === 'spotify-this-song'){
//     console.log("A song");
// }
//
// if(operator === 'movie-this'){
//     console.log("Movies");
// }
//
// if(operator === 'do-what-it-says'){
//     console.log("To-do");
// }