import React from 'react'
import { Link } from "react-router-dom";



function App() {
    var d = new Date(), 
    hour = d.getHours(), 
    minute = d.getMinutes(), 
    day = d.getDay(), 
    t= hour + ':' +minute; 
    var theday = "Today"
 
if (day === 0 && t>"08:00"  && t <"16:59"){
    var theday = "Today is Sunday and we open"
}
else if(day === 1 && t>"08:00"  && t <"21:59"){ 
    var theday = "Today is Monday and we open"
    console.log("Monday"); 

}
else if(day === 2 && t>"08:00"  && t <"21:59"){ 
    var theday = "Today is Tuesday and we open"
    console.log("Tueday"); 

}
else if(day === 3 && t>"08:00"  && t <"21:59"){     
    var theday = "Today is Wednesday and we open"
    console.log("Wednesday"); 

}
else if(day === 4 && t>"08:00"  && t <"21:59"){ 
    var theday = "Today is Thursday and we open"
    console.log("Thursday"); 

}
else if(day === 5 && t>"08:00"  && t <"23:59"){
    var theday = "Today is Friday and we open"
    console.log(theday); 
}
else if(day === 6 && t>"08:00"  && t <"23:59"){ 
    var theday = "Today is Saturday and we open"
    console.log("Saturday"); 

}else{ 
 console.log("Closed") 

} 

    return (
        <div>
            <h1 className="page-title">Opening Times</h1>
            <h1>{theday}</h1>
            <h2>The local time is {hour} : {minute}</h2>

            <div>
            <h2>Monday 0800 - 2200</h2>
            <h2>Tuesaday 0800 - 2200</h2>
            <h2>Wednesday 0800 - 2200</h2>
            <h2>Thursday 0800 - 2200</h2>
            <h2>Friday 0800 - 0000</h2>
            <h2>Saturday 0800 - 0000</h2>
            <h2>Sunday 0800 - 1700</h2>
            </div>

            <div>
                <h1>Showings</h1>
                <p> To view all showing and to book your ticket <Link to="/Listings">Click here</Link> </p>
            </div>

            <div>
                <h1>Directions</h1>
                <p> <Link to="/Places">Click here</Link> to find the directions and plan your day out</p>
            </div>

        </div>
    )



}

export default App;