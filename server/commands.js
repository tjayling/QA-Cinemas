const db = require('./DB/databaseindex.js')
const Screens = require('./screens/screenModel.js')

const commands = () => {
db.dropCollection( 'screens', function(err) {
    if ( err ) {
      if (err.code === 26)  
        console.log('-- screens collection does not exists');
      else throw err;
    }
    else console.log( "-- screens collection dropped" );
})

Screens.create( screenData, function (err, screen) {
    if ( err ) throw err;
    console.log( screen + '\n-- users inserted successfully')}) 

const screenData = [{
	"id": 1,
	"capacity": 260,
	"screen size" :"imax"
},
{
	"id" : 2,
	"capacity" : 150,
	"screen size" : "4DX"
},
{
	"id" : 3,
	"capacity" : 140,
	"screen size" : "Standard"
},
{
	"id" : 4,
	"capacity" : 160,
	"screen size" : "Standard"
},
{
	"id" : 5,
	"capacity" : 150,
	"screen size" : "Standard"
},
{
	"id" : 6,
	"capacity" : 170,
	"screen size" : "Standard"
},
{
	"id" : 7,
	"capacity" : 120,
	"screen size" : "Standard"
},
{
	"id" :8,
	"capacity" : 50,
	"screen size" : "Standard"
}]
}

module.exports.commands = commands;
