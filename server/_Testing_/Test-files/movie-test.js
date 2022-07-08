const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../testindex");

const Movie = require("../../movies/movieModel");

mocha.describe("CRUD testing", () => {
    let id;
    mocha.beforeEach((done) => {
      Movie.deleteMany({})
        .then(() => {
          Movie.create({ //replace with what you're testing 
            _id: '1',
            id: 1,
            title: "Goodfellas",
            description:
              "Young Henry Hill, with his friends Jimmy and Tommy, begins the climb from being a petty criminal to a gangster on the mean streets of New York.",
            length: "2h 26m",
            actors: "Robert De Niro, Ray Liotta, Joe Pesci",
            directors: "Martin Scorsese",
            img_link:
              "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
          })
            .then((result) => {
              id = result._id;
              done();
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    });

    mocha.it("should create a movie", (done) => {
        const requestBody = {
            _id: '2',
            id: 2,
            title: "Goodfellas spin-off",
            description:
              "Young Henry Hill, with his friends Jimmy and Tommy, begins the climb from being a petty criminal to a gangster on the mean streets of New York.",
            length: "2h 26m",
            actors: "Robert De Niro, Ray Liotta, Joe Pesci",
            directors: "Martin Scorsese",
            img_link:
              "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
        };
        chai
          .request(server)
          .post("/movies/create") //change to route 
          .send(requestBody)
          .end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201); //make sure status code is the same and what's in the controller
            chai.expect(res.body).to.have.property('message').eql('Movie created!');
            done();
          });
      });

      mocha.it("Should fail to create a movie", (done) => {
        const requestBody = {
            _id: 6,
            id: 'six', //changed to string
            title: 123,
            description:
              "Young Henry Hill, with his friends Jimmy and Tommy, begins the climb from being a petty criminal to a gangster on the mean streets of New York.",
            length: "2h 26m",
            actors: false,
            directors: "Martin Scorsese",
            img_link:
              "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
        };
        chai
          .request(server)
          .post("/movies/create") //change to route 
          .send(requestBody)
          .end((err, res) => {
            chai.expect(err);
            chai.expect(res.status).to.equal(400); 
            chai.expect(res.body).to.have.property('message').eql('Movie not created!');
            done();
        });
      })

      mocha.it("should find all the movies", (done) => {
        chai
          .request(server)
          .get("/movies")
          .end((err, res) => {
            chai.expect(err).to.be.null
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.success).to.equal(true);
<<<<<<< HEAD
           ;
=======
>>>>>>> 45d5797eb72e87d846f6ad036fab9b04c7b24f8f
            done();
          });
      });
  
      mocha.it("should find movie by id", (done) => {
        chai
          .request(server)
          .get(`/movies/${id}`)
          .end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.data.title).to.equal("Goodfellas");
            chai.expect(res.body.data.directors).to.equal("Martin Scorsese");
            chai.expect(res.body.data.actors).to.equal("Robert De Niro, Ray Liotta, Joe Pesci");
            chai.expect(res.body.data.length).to.equal("2h 26m");
            return done();
          });
      });

      mocha.it("should fail find screen by id", (done) => {
        chai
          .request(server)
          .get("/movies/1111")
          .end((err, res) => {
            chai.expect(err);
            chai.expect(res.status).to.equal(404);
            chai.expect(res.body.success).to.equal(false);
            return done();
          });
      });

});