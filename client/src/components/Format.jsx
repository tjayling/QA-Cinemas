import React from "react";
import { Link } from "react-router-dom";
import Comment from "../components/Comment.jsx";

const axios = require("axios");

function createElements(data, type) {
  let movieElements = [];
  let movieIds = [];

  if (data.success) {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => createMovieElements(response.data))
      .catch((error) => console.error(error));

    function createMovieElements(movieData) {
      for (let movie of movieData.data) {
        movieIds.push(movie._id);
      }
      for (let movie of movieData.data) {
        if (movieIds.includes(movie._id)) {
          movieElements.push(
            <div style={{ margin: "25px" }} key={movie._id}>
              <h2>{movie.title}</h2>
              <img
                src={movie.img_link}
                alt={`${movie.title} cover`}
                width="200px"
              />
              {data.data.map((item) => {
                if (item.movie.$id === movie._id) {
                  if (type === "viewings") {
                    return (
                      <div key={item._id}>
                        <div style={{ border: "2px solid black" }}>
                          <Link
                            to={`/viewing`}
                            state={{
                              viewing: JSON.stringify(item),
                              movie: JSON.stringify(movie),
                            }}
                          >
                            <p>
                              {`Time: ${item.time}`}
                              <br />
                              {`Screen: ${item.screen.$id}`}
                            </p>
                          </Link>
                        </div>
                      </div>
                    );
                  }
                  if (type === "comments") {
                    return (
                      <div key={item._id}>
                        <div style={{ border: "2px solid black" }}>
                          <Comment comment={item} id={item._id} />
                        </div>
                      </div>
                    );
                  }
                }
              })}
            </div>
          );
        }
      }
    }
  }
  console.log(movieElements);
  return movieElements;
}

export default createElements;

// import React from "react";
// import { Link } from "react-router-dom";
// import Comment from "../components/Comment.jsx";

// const axios = require("axios");

// function createElements(data, type) {
//   let movieElements = [];
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
//                 alt={`${movie.title} cover`}
//                 width="200px"
//               />
//               {data.data.map((item) => {
//                 if (item.movie.$id === movie._id) {
//                   if (type === "viewings") {
//                     return (
//                       <div key={item._id}>
//                         <div style={{ border: "2px solid black" }}>
//                           <Link
//                             to={`/viewing`}
//                             state={{
//                               viewing: JSON.stringify(item),
//                               movie: JSON.stringify(movie),
//                             }}
//                           >
//                             <p>
//                               {`Time: ${item.time}`}
//                               <br />
//                               {`Screen: ${item.screen.$id}`}
//                             </p>
//                           </Link>
//                         </div>
//                       </div>
//                     );
//                   }
//                   if (type === "comments") {
//                   return (
//                     <div key={item._id}>
//                       <div style={{ border: "2px solid black" }}>
//                         <Comment comment={item} id={item._id} />
//                       </div>
//                     </div>
//                   );
//                   }
//                 }
//               })}
//             </div>
//           );
//         }
//       }
//     }
//   }
//   return movieElements;
// }

// export default createElements;
