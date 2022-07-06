const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../testindex");

const Screen = require("../../screens/screenModel");

mocha.describe("CRUD testing", () => {
    let id;
    mocha.beforeEach((done) => {
      Screen.deleteMany({})
        .then(() => {
          Screen.create({ //replace with what you're testing 
            _id: '1',
            id: 1,
            capacity: 260,
            screensize: "imax",
          })
            .then((result) => {
              id = result._id;
              done();
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    });
  
    mocha.it("should create a screen", (done) => {
      const requestBody = {
            _id: '2',   //add another example - may need to add a create function and route if doesn't exist
            id: 2,
            capacity: 150,
            screensize: "4DX",
      };
      chai
        .request(server)
        .post("/Screens/create") //change to route 
        .send(requestBody)
        .end((err, res) => {
          chai.expect(err).to.be.null;
          chai.expect(res.status).to.equal(201); //make sure status code is the same and what's in the controller
          chai.expect(res.body).to.have.property('message').eql('Screen created!');
          done();
        });
    });

    mocha.it("Should fail to create a screen", (done) => {
      const requestBody = {
        _id: 7,   //add another example - may need to add a create function and route if doesn't exist
        id: 7,
        capacity: 'not a number',
        screensize: 3,
      };
      chai
        .request(server)
        .post("/Screens/create") //change to route 
        .send(requestBody)
        .end((err, res) => {
          chai.expect(err);
          chai.expect(res.status).to.equal(400); 
          chai.expect(res.body).to.have.property('message').eql('Screen not created!');
          done();
      });
    })
  
    mocha.it("should find all the screens", (done) => {
      chai
        .request(server)
        .get("/Screens")
        .end((err, res) => {
          chai.expect(err).to.be.null
          chai.expect(res.status).to.equal(200);
          chai.expect(res.body.success).to.equal(true);
         ;
          done();
        });
    });


    mocha.it("should find screen by id", (done) => {
        chai
          .request(server)
          .get(`/Screens/${id}`)
          .end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.data.capacity).to.equal(260);
            chai.expect(res.body.data.screensize).to.equal("imax");
            return done();
          });
      });

      mocha.it("should fail to find screen by id", (done) => {
        chai
          .request(server)
          .get("/Screens/1111")
          .end((err, res) => {
            chai.expect(err);
            chai.expect(res.status).to.equal(404);
            chai.expect(res.body.success).to.equal(false);
            return done();
          });
      });

  });