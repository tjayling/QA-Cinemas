const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../testindex");

const Comment = require("../../models/comment-model");

mocha.describe("CRUD testing", () => {
    let id;
    mocha.beforeEach((done) => {
      Comment.deleteMany({})
        .then(() => {
            Comment.create({
                _id: '1',
                id: 1,
                username: "Dora Blue",
                comment: "Muy Bien",
                discussion: {
                  $ref: "discussions",
                  $id: "3",
                }            
          })
            .then((result) => {
              id = result._id;
              done();
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    });

    mocha.it("should create a comment", (done) => {
        const requestBody = {
            _id: '2',
            id: 2,
            username: "Emily Pink",
            comment: "That's not true, it's a great film",
            discussion: {
              $ref: "discussions",
              $id: "4",
            },
        };
        chai
          .request(server)
          .post("/comments/post") //change to route 
          .send(requestBody)
          .end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201); //make sure status code is the same and what's in the controller
            chai.expect(res.body).to.have.property('message').eql('Comment created!');
            done();
          });
      });

      mocha.it("Should fail to create a comment", (done) => {
        const requestBody = {
            _id: 2,
            id: 'ten',
            username: "Emily Pink",
            comment: "That's not true, it's a great film",
            discussion: {
              $ref: "discussions",
              $id: "4",
            },
      }
        chai
          .request(server)
          .post("/comments/post") //change to route 
          .send(requestBody)
          .end((err, res) => {
            chai.expect(err);
            chai.expect(res.status).to.equal(400); 
            chai.expect(res.body).to.have.property('message').eql('Comment not created!');
            done();
        });
      })

      mocha.it("should delete the comment", (done) => {
        chai
            .request(server)
            .delete(`/comments/delete/${id}`)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(200); 
                done();
            });
      })

      mocha.it("should find all the comments", (done) => {
        chai
          .request(server)
          .get("/comments/readAll")
          .end((err, res) => {
            chai.expect(err).to.be.null
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.success).to.equal(true);
           ;
            done();
          });
      });
  
  
      mocha.it("should find comment by id", (done) => {
          chai
            .request(server)
            .get(`/comments/read/${id}`)
            .end((err, res) => {
              chai.expect(err).to.be.null;
              chai.expect(res.status).to.equal(200);
              chai.expect(res.body.data.username).to.equal("Dora Blue");
              chai.expect(res.body.data.comment).to.equal("Muy Bien");
              done();
            });
        });
  
        mocha.it("should fail to find comment by id", (done) => {
          chai
            .request(server)
            .get("/comments/read/1111")
            .end((err, res) => {
              chai.expect(err);
              chai.expect(res.status).to.equal(404);
              chai.expect(res.body.success).to.equal(false);
              done();
            });
        });

        mocha.it("should update comment", (done) => {
            const requestBody = {
                id: 2,
                username: "Emily Pink",
                comment: "That's not true, it's a great film",
                discussion: {
                  $ref: "discussions",
                  $id: "4",
                }
            };
          chai
            .request(server)
            .put(`/comments/update/${id}`)
            .send(requestBody)
            .end((err, res) => {
                chai.expect(err).to.be.null
                chai.expect(res.status).to.equal(200);
                chai.expect(res.body).to.have.property('message').eql("Comment updated!");
                return done();
            });
        });

        mocha.skip("should not update comment", (done) => {
            const requestBody = {
                _id: 10,
                id: "not a number",
                username: "Emily Pink",
                comment: "That's not true, it's a great film" ,
            };
          chai
          .request(server)
          .put(`/comments/update/${id}`)
          .send(requestBody)
          .end((err, res) => {
              chai.expect(err)
              chai.expect(res.status).to.equal(404);
              chai.expect(res.body).to.have.property('message').eql("Comment not updated!");
              return done();
          });
});

})