const db = require('./DB/databaseindex.js')
const Screens = require('./screens/screenModel.js')
const Movies = require('./movies/movieModel.js')
const PaymentInfo = require('./paymentInfo/paymentModel.js')
const Viewings = require('./viewings/viewingsModel')

const commands = () => {
db.dropCollection( 'screens', function(err) {
    if ( err ) {
      if (err.code === 26)  
        console.log('-- screens collection does not exists');
      else throw err;
    }
    else console.log( "-- screens collection dropped" );
})

db.dropCollection( 'movies', function(err) {
    if ( err ) {
      if (err.code === 26)  
        console.log('-- movies collection does not exists');
      else throw err;
    }
    else console.log( "-- movies collection dropped" );
})

db.dropCollection( 'payment', function(err) {
    if ( err ) {
      if (err.code === 26)  
        console.log('-- payment collection does not exists');
      else throw err;
    }
    else console.log( "-- payment collection dropped" );
})

db.dropCollection( 'viewings', function(err) {
    if ( err ) {
      if (err.code === 26)  
        console.log('-- viewings collection does not exists');
      else throw err;
    }
    else console.log( "-- viewings collection dropped" );
})

const screenData = [{
	"_id": 1,
	"id": 1,
	"capacity": 260,
	"screensize" :"imax"
},
{
	"_id": 2,
	"id" : 2,
	"capacity" : 150,
	"screensize" : "4DX"
},
{
	"_id": 3,
	"id" : 3,
	"capacity" : 140,
	"screensize" : "Standard"
},
{
	"_id": 4,
	"id" : 4,
	"capacity" : 160,
	"screensize" : "Standard"
},
{
	"_id": 5,
	"id" : 5,
	"capacity" : 150,
	"screensize" : "Standard"
},
{
	"_id": 6,
	"id" : 6,
	"capacity" : 170,
	"screensize" : "Standard"
},
{
	"_id": 7,
	"id" : 7,
	"capacity" : 120,
	"screensize" : "Standard"
},
{
	"_id": 8,
	"id" :8,
	"capacity" : 50,
	"screensize" : "Standard"
}];

Screens.create( screenData, function (err, screen) {
    if ( err ) throw err;
    console.log( screen + '\n-- screens inserted successfully')}); 


const movieData = [{
	"_id": 1,
    "id": 1,
	"title": "Goodfellas",
	"description" :"Young Henry Hill, with his friends Jimmy and Tommy, begins the climb from being a petty criminal to a gangster on the mean streets of New York.",
	"length" : "2h 26m",
	"actors" : "Robert De Niro, Ray Liotta, Joe Pesci",
	"directors" :"Martin Scorsese",
	"img_link" : "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
},
{
	"_id": 2,
	"id": 2,
	"title": "Matilda",
	"description" :"Matilda shares a home with her parents and brother, who do not appreciate her. When her principal tortures her and a kind-hearted teacher, she uses her telekinetic powers to settle scores.",
	"length" : "1h 35m",
	"actors" : "Danny DeVito, Rhea Perlman, Mara Wilson",
	"directors" : "Danny DeVito",
	"img_link" : "https://m.media-amazon.com/images/M/MV5BMWE2YTBhYzItZDAxZS00Mjc3LWIxNmYtMzljZjIxMGE1NmY2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"
},
{
	"_id": 3,
	"id": 3,
	"title": "Top Gun",
	"description" :"As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
	"length" : "1h 50m",
	"actors" : "Tom Cruise, Tim Robbins, Kelly McGillis",
	"directors" : "Tony Scott",
	"img_link" : "https://www.themoviedb.org/t/p/w500/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg"
},
{
	"_id": 4,
	"id": 4,
	"title": "The Room",
	"description" :"Talented, brilliant, incredible, amazing, show stopping, spectacular, never the same, totally unique, completely not ever been done before, unafraid to reference or not reference, put it in a blender, vomit on it, eat it, give birth to it",
	"length" : "1h 31m",
	"actors" : "Tommy Wiseau, Juliette Danielle, Greg Sestero",
	"directors" : "Tommy Wiseau",
	"img_link" : "https://m.media-amazon.com/images/M/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_FMjpg_UX1000_.jpg"
}];

Movies.create(movieData,  function (err, screen) {
    if ( err ) throw err;
    console.log( screen + '\n-- Movie inserted successfully')}); 

const paymentData = [{
    "id" : 1,
    "cardHolderName" : "test name",
    "cardNumber" : 12345678,
    "expiry" : "09/25",
    "cvc" : 111
}]

PaymentInfo.create(paymentData, function (err, screen) {
    if ( err ) throw err;
    console.log( screen + '\n-- Payment info inserted successfully')});

}

const viewingsData =[ {
	"_id" : 1,
    "id" : 1,
    "time" : "12:50",
    "screen_id" : {
		"$ref" : "screens",
		"$id" : '1'
	},
    "movie_id" : {
		"$ref" : "movies",
		"$id" : '1'
	}

}]

Viewings.create(viewingsData, function (err, screen) {
    if ( err ) throw err;
    console.log( screen + '\n-- viewings info inserted successfully')});


module.exports.commands = commands();


