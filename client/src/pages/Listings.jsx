import React from "react";
import createElements from "../components/Format.jsx";
const axios = require("axios");

axios
  .get("http://localhost:3000/viewings")
  .then((response) => getViewings(response.data))
  .catch((error) => console.error(error));

let movieElements = [];
function getViewings(data) {
  movieElements = createElements(data, "viewings");
}

// let movieElements = [];

// function createElements(data) {
//   if (data.success) {
//     let movieIds = [];
//     for (let viewing of data.data) {
//       if (!movieIds.includes(viewing.movie.$id)) {
//         movieIds.push(viewing.movie.$id);
//       }
//     }

//     axios
//       .get("http://localhost:3000/movies")
//       .then((response) => createMovieElements(response.data))
//       .catch((error) => console.error(error));

//     function createMovieElements(movieData) {
//       for (let movie of movieData.data) {
//         if (movieIds.includes(movie._id)) {
//           movieElements.push(
//             <div style={{ margin: "25px" }} key={movie._id}>
//               <h2>{movie.title}</h2>
//               <img
//                 src={movie.img_link}
//                 alt={`${movie.title} cover image`}
//                 width="200px"
//               />
//               {data.data.map((viewing) => {
//                 if (viewing.movie.$id === movie._id) {
//                   return (
//                     <div key={viewing._id}>
//                       <div style={{ border: "2px solid black" }}>
//                         <Link
//                           to={`/viewing`}
//                           state={{
//                             viewing: JSON.stringify(viewing),
//                             movie: JSON.stringify(movie),
//                           }}
//                         >
//                           <p>
//                             {`Time: ${viewing.time}`}
//                             <br />
//                             {`Screen: ${viewing.screen.$id}`}
//                           </p>
//                         </Link>
//                       </div>
//                     </div>
//                   );
//                 }
//               })}
//             </div>
//           );
//         }
//       }
//     }
//   }
//   return elements
// }

const listings = () => {
  return <div style={{ display: "flex" }}>{movieElements}</div>;
};

export default listings;
