const db = require('./DB/databaseindex.js')
const Screens = require('./screens/screenModel.js')
const Movies = require('./movies/movieModel.js')
const PaymentInfo = require('./paymentInfo/paymentModel.js')
const Viewings = require('./viewings/viewingsModel')
const Bookings= require('./bookings/bookingsModel')
const Discussions = require('./models/discussion-model.js')
const Comments = require('./models/comment-model.js')

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

db.dropCollection( 'payments', function(err) {
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

db.dropCollection( 'bookings', function(err) {
    if ( err ) {
      if (err.code === 26)  
        console.log('-- bookings collection does not exists');
      else throw err;
    }
    else console.log( "-- bookings collection dropped" );
})

db.dropCollection( 'comments', function(err) {
	if ( err ) {
	  if (err.code === 26)  
		console.log('-- comments collection does not exists');
	  else throw err;
	}
	else console.log( "-- comments collection dropped" );
})

db.dropCollection( 'discussions', function(err) {
	if ( err ) {
	  if (err.code === 26)  
		console.log('-- discussions collection does not exists');
	  else throw err;
	}
	else console.log( "-- discussions collection dropped" );
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
},
{
	_id: 5,
	id:5,
	title: "Pulp Fiction",
	description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
	length: "2h 45m",
	actors: "John Travolta, Uma Thurman, Samuel L. Jackson",
	directors: "Quentin Tarantino",
	img_link: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
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


const viewingsData =[ {
	"_id" : 1,
    "id" : 1,
    "time" : "12:50",
    "screen" : {
		"$ref" : "screens",
		"$id" : '1'
	},
    "movie" : {
		"$ref" : "movies",
		"$id" : '1'
	},
	price: "£1.00"

	},
	{
		_id: 2,
		id: 2,
		time: "14:30",
		screen: {
			$ref: "screens",
			$id: "4",
		},
		movie: {
			$ref: "movies",
			$id: "1",
		},
		price: "£1.00"
	},
	{
		_id: 3,
		id: 3,
		time: "10:00",
		screen: {
			$ref: "screens",
			$id: "2",
		},
		movie: {
			$ref: "movies",
			$id: "4",
		},
		price: "£1.00"
	},
	{
		_id: 4,
		id: 4,
		time: "17:15",
		screen: {
			$ref: "screens",
			$id: "5",
		},
		movie: {
			$ref: "movies",
			$id: "2",
		},
		price: "£1.00"
	},
	{
		_id: 5,
		id: 5,
		time: "00:00",
		screen: {
			$ref: "screens",
			$id: "6",
		},
		movie: {
			$ref: "movies",
			$id: "3",
		}, 
		price: "£1.00"
	},
	{
		_id: 6,
		id: 6,
		time: "17:00",
		screen: {
			$ref: "screens",
			$id: "1",
		},
		movie: {
			$ref: "movies",
			$id: "2",
		},
		price: "£1.00" 
	},{
		_id: 7,
		id: 7,
		time: "15:00",
		screen: {
			$ref: "screens",
			$id: "2",
		},
		movie: {
			$ref: "movies",
			$id: "3",
		},
		price: "£1.00" 
	},
	{
		_id: 8,
		id: 8,
		time: "11.15",
		screen: {
			$ref: "screens",
			$id: "3",
		},
		movie: {
			$ref: "movies",
			$id: "2",
		},
		price: "£1.00" 
	},{
		_id: 9,
		id: 9,
		time: "16:30",
		screen: {
			$ref: "screens",
			$id: "3",
		},
		movie: {
			$ref: "movies",
			$id: "3",
		},
		price: "£1.00"
	},{
		_id: 10,
		id: 10,
		time: "19:30",
		screen: {
			$ref: "screens",
			$id: "4",
		},
		movie: {
			$ref: "movies",
			$id: "4",
		},
		price: "£1.00"
	},{
		_id: 11,
		id: 11,
		time: "12:15",
		screen: {
			$ref: "screens",
			$id: "5",
		},
		movie: {
			$ref: "movies",
			$id: "4",
		},
		price: "£1.00" 
	},{
		_id: 12,
		id: 12,
		time: "18:40",
		screen: {
			$ref: "screens",
			$id: "6",
		},
		movie: {
			$ref: "movies",
			$id: "1",
		},
		price: "£1.00" 
	},{
		_id: 13,
		id: 13,
		time: "16:45",
		screen: {
			$ref: "screens",
			$id: "7",
		},
		movie: {
			$ref: "movies",
			$id: "3",
		},
		price: "£1.00" 
	},{
		_id: 14,
		id: 14,
		time: "13:20",
		screen: {
			$ref: "screens",
			$id: "7",
		},
		movie: {
			$ref: "movies",
			$id: "4",
		},
		price: "£1.00" 
	},{
		_id: 15,
		id: 15,
		time: "15:50",
		screen: {
			$ref: "screens",
			$id: "8",
		},
		movie: {
			$ref: "movies",
			$id: "2",
		},
		price: "£1.00"
	},{
		_id: 16,
		id: 16,
		time: "19:50",
		screen: {
			$ref: "screens",
			$id: "8",
		},
		movie: {
			$ref: "movies",
			$id: "1",
		},
		price: "£1.00" 
	},
	{
		_id: 17,
		id: 17,
		time: "19:20",
		screen: {
			$ref: "screens",
			$id: "2",
		},
		movie: {
			$ref: "movies",
			$id: "5",
		},
		price: "£1.00" 
	},{
		_id: 18,
		id: 18,
		time: "20:50",
		screen: {
			$ref: "screens",
			$id: "3",
		},
		movie: {
			$ref: "movies",
			$id: "5",
		},
		price: "£1.00" 
	},{
		_id: 19,
		id: 19,
		time: "11:45",
		screen: {
			$ref: "screens",
			$id: "8",
		},
		movie: {
			$ref: "movies",
			$id: "5",
		},
		price: "£1.00" 
	},
{
	_id: 20,
		id: 20,
		time: "21:00",
		screen: {
			$ref: "screens",
			$id: "1",
		},
		movie: {
			$ref: "movies",
			$id: "5",
		},
		price: "£1.00" 	
}];

Viewings.create(viewingsData, function (err, screen) {
    if ( err ) throw err;
    console.log( screen + '\n-- viewings info inserted successfully')});

const bookingsData = [{
	"id" :1,
	"email" :"testemail@test.com",
	"viewing" : {
		"$ref" : "viewings",
		"$id" : '1'
	}
}];

Bookings.create(bookingsData, function (err, screen) {
		if ( err ) throw err;
		console.log( screen + '\n-- booking info inserted successfully')});


const discussionData = [
	{
		_id: 1,
		id: 1,
		username: "Pyotr Yellow",
		rating:  10,
		comment: "So bad, it's good",
		movie: {
			"$ref" : "movies",
			"$id" : '4'
		}
	},
	{
		_id: 2, 
		id: 2,
		username: "Emily Pink",
		rating:  8,
		comment: "The film's score is great",
		movie: {
			"$ref" : "movies",
			"$id" : '1'
		}
	},
	{
		_id: 3,
		id: 3,
		username: "Shani Red",
		rating:  8,
		comment: "Matilda is a classic. Love it!!!",
		movie: {
			"$ref" : "movies",
			"$id" : '2'
		}
	},
	{
		_id: 4, 
		id: 4,
		username: "Juan Purple",
		rating:  3,
		comment: "Not a fan - too many planes",
		movie: {
			"$ref" : "movies",
			"$id" : '3'
		}
	}];
	
Discussions.create(discussionData,  function (err, screen) {
	if ( err ) throw err;
	console.log( screen + '\n-- Discussion inserted successfully')}); 
	

const commentData = [
	{
		_id: 1,
		id: 1,
		username: "Dora Blue",
		comment: "Muy Bien",
		discussion: {
			"$ref" : "discussions",
			"$id" : '3'
		}
	},
	{
		_id: 2,
		id: 2,
		username: "Emily Pink",
		comment: "That's not true, it's a great film",
		discussion: {
			"$ref" : "discussions",
			"$id" : '4'
		}
	},
	{
		_id: 3, 
		id: 3,
		username: "Ahmed Orange",
		comment: "Well said",
		discussion: {
			"$ref" : "discussions",
			"$id" : '3'
		}
	},
	{
		_id: 4,
		id: 4,
		username: "Pyotr Yellow",
		comment: "I loved the score too!!",
		discussion: {
			"$ref" : "discussions",
			"$id" : '2'
		}
	}];
		
Comments.create(commentData,  function (err, screen) {
	if ( err ) throw err;
	console.log( screen + '\n-- Comment inserted successfully')}); 
	

}


module.exports.commands = commands();
