const mocha = require("mocha")
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../testindex");

const Viewings = require("../../viewings/viewingsModel");

mocha.describe("CRUD testing", () => {
    let id;
    mocha.beforeEach((done) => {
        Viewings.deleteMany({})
        .then(() => {
            Viewings.create({
                _id: '1',
                id: 1,
                time: "12:50",
                screen: {
                    $ref: "screens",
                    $id: "1",
                },
                movie: {
                    $ref: "movies",
                    $id: "1",
                },
                price: "£1.00",
        })
            .then((result) => {
                id = result._id;
                done();
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
        
    });
      
    });

    // mocha.it("should create a viewing", (done) => {
    //     const requestBody = {
    //         _id: "30",
    //         id: 30,
    //         time: "12:50",
    //         screen: {
    //             $ref: "screens",
    //             $id: "1"
    //         },
    //         movie: {
    //             $ref: "movies",
    //             $id: "1"
    //         },
    //         price: "£1.00"
    //     };
    //     chai
    //       .request(server)
    //       .post("/Viewings/create") //change to route 
    //       .send(requestBody)
    //       .end((err, res) => {
    //         chai.expect(err).to.be.null;
    //         chai.expect(res.status).to.equal(201); //make sure status code is the same and what's in the controller
    //         chai.expect(res.body).to.have.property('message').eql('Viewing created!');
    //         done();
    //       });
    //   });
  
      mocha.it("Should fail to create a viewing", (done) => {
        const requestBody = {
            "_id": 70,
            "id": "seventy",
            "time": 1250,
            "screen": {
                "$ref": "screens",
                "$id": "1"
            },
            "movie": {
                "$ref": "movies",
                "$id": "1"
            },
            "price": "£1.00"
        };
        chai
          .request(server)
          .post("/Viewings/create") //change to route 
          .send(requestBody)
          .end((err, res) => {
            chai.expect(err);
            chai.expect(res.status).to.equal(400); 
            chai.expect(res.body).to.have.property('message').eql('Viewing not created!');
            done();
        });
      })
    
   
    mocha.it("should find all the viewings", (done) => {
        chai
        .request(server)
        .get("/Viewings")
        .end((err, res) => {
            chai.expect(err).to.be.null
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.success).to.equal(true);
            ;
            done();
        });
    });

    mocha.it("should find viewing by id", (done) => {
        chai
        .request(server)
        .get("/Viewings/30")
        .end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.data.time).to.equal("12:50");
            return done();
        });
    });
    mocha.it("should fail find viewing by id", (done) => {
        chai
        .request(server)
        .get("/Viewings/fsnsf")
        .end((err, res) => {
            chai.expect(err);
            chai.expect(res.status).to.equal(400);
            chai.expect(res.body.success).to.equal(false);
            return done();
        });
    });