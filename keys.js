//Why does this show up in the command line.
//console.log('this is loaded');

var twitterKeys = {
    consumer_key: 'bEdzkhZM2cawYWlXz0pQWOwxD',
    consumer_secret: 'MQdupi1VUL74z3ev9YEVA2PkvvYcRnrRmu5XyZitAbsO42Cobl',
    access_token_key: '917108980878594049-iDXlMvEaCw1rJJojHNZTMgfifEuxjLy',
    access_token_secret: 'pdRoXdAuESvMeZNrwuzLCd8yXTNR5eYK76tA0N9ox3Bp5'
};

var spotifyKeys = {
    id: 'a894ada877ba43568f8c84096c875e59',
    secret: '93377aae9c6b43eda98405fe38cfa2e9'
};

var omdbKey = '40e9cece';

//We're exporting an object.
module.exports = {
    twitter: twitterKeys,
    spotify: spotifyKeys,
    omdb: omdbKey
};
