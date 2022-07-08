const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../testindex");

const Discussion = require("../../models/discussion-model");

mocha.describe("CRUD testing", () => {
    let id;
    mocha.beforeEach((done) => {
      Discussion.deleteMany({})
        .then(() => {
            Discussion.create({ //replace with what you're testing 
                _id: '1',
                id: 1,
                username: "Pyotr Yellow",
                rating: 10,
                comment: "So bad, it's good",
                movie: {
                  $ref: "movies",
                  $id: "4",
          }})
            .then((result) => {
              id = result._id;
              done();
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    });

    mocha.it("should create a discussion", (done) => {
        const requestBody = {
                _id: '2',
                id: 2,
                username: "Emily Pink",
                rating: 8,
                comment: "The film's score is great",
                movie: {
                  $ref: "movies",
                  $id: "1",
                }
        };
        chai
          .request(server)
          .post("/discussion/post") //change to route 
          .send(requestBody)
          .end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201); //make sure status code is the same and what's in the controller
            chai.expect(res.body).to.have.property('message').eql('Discussion created!');
            done();
          });
      });

      mocha.it("Should fail to create a discussion", (done) => {
        const requestBody = {
            _id: 10,
            id: 10,
            username: "Pyotr Yellow",
            rating: 'ten',
            comment: "So bad, it's good",
            movie: {
              $ref: "movies",
              $id: "4",
      }
        };
        chai
          .request(server)
          .post("/discussion/post") //change to route 
          .send(requestBody)
          .end((err, res) => {
            chai.expect(err);
            chai.expect(res.status).to.equal(400); 
            chai.expect(res.body).to.have.property('message').eql('Discussion not created!');
            done();
        });
      })

      mocha.it("should delete the discussion", (done) => {
        chai
            .request(server)
            .delete(`/discussion/delete/${id}`)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(200); 
                done();
            });
      })

      mocha.it("should find all the discussions", (done) => {
        chai
          .request(server)
          .get("/discussion")
          .end((err, res) => {
            chai.expect(err).to.be.null
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.success).to.equal(true);
           ;
            done();
          });
      });
  
  
      mocha.it("should find discussion by id", (done) => {
          chai
            .request(server)
            .get(`/discussion/${id}`)
            .end((err, res) => {
              chai.expect(err).to.be.null;
              chai.expect(res.status).to.equal(200);
              chai.expect(res.body.data.rating).to.equal(10);
              chai.expect(res.body.data.comment).to.equal("So bad, it's good");
              done();
            });
        });
  
        mocha.it("should fail  to find discussion by id", (done) => {
          chai
            .request(server)
            .get("/discussion/1111")
            .end((err, res) => {
              chai.expect(err);
              chai.expect(res.status).to.equal(404);
              chai.expect(res.body.success).to.equal(false);
              done();
            });
        });

        mocha.it("should update discussion", (done) => {
            const requestBody = {
                id: 2,
                username: "Emily Pink",
                rating: 8,
                comment: "The film's score is great",
                movie: {
                  $ref: "movies",
                  $id: "1",
                }
            };
          chai
            .request(server)
            .put(`/discussion/update/${id}`)
            .send(requestBody)
            .end((err, res) => {
                chai.expect(err).to.be.null
                chai.expect(res.status).to.equal(200);
                chai.expect(res.body).to.have.property('message').eql("Discussion updated!");
                return done();
            });
        });

        mocha.it("should not update discussion", (done) => {
            const requestBody = {
                id: "two",
                username: "Emily Pink",
                rating: "eight",
                comment: "The film's score is great",
                movie: {
                  $ref: "movies",
                  $id: "1",
                }
            };
          chai
          .request(server)
          .put(`/discussion/update/${id}`)
          .send(requestBody)
          .end((err, res) => {
              chai.expect(err)
              chai.expect(res.status).to.equal(404);
              chai.expect(res.body).to.have.property('message').eql("Discussion not updated!");
              return done();
          });
});

})