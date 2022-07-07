const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../testindex");

const Booking = require("../../bookings/bookingsModel");

mocha.describe("CRUD testing", () => {
    let id;
    mocha.beforeEach((done) => {
        Booking.deleteMany({})
        .then(() => {
            Booking.create({
                id: 1,
                email: "testemail@test.com",
                viewing: "Goodfellas"
            })
            .then((result) => {
                id = result._id;
                done();
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    });
    mocha.it("should create a booking", (done) => {
        const requestBody = {
            _id: '2',
            id: 2,
            email: "testemail2@test.com",
            viewing: "Pulp Fiction"
        };
        chai
        .request(server)
        .post("/bookings/create")
        .send(requestBody)
        .end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.have.property('message').eql('Bookings created!');
            done();
        });
    });
  

    })
    mocha.it("should find all the bookings", (done) => {
        chai
        .request(server)
        .get("/bookings")
        .end((err, res) => {
            chai.expect(err).to.be.null
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.success).to.equal(true);
            ;
            done();
        });
    });
    mocha.it("should find booking by id", (done) => {
        chai
        .request(server)
        .get(`/bookings/1`)
        .end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.data.email).to.equal("testemail@test.com");
            chai.expect(res.body.data.viewing).to.equal("Goodfellas");
            return done();
        });
    });
    mocha.it("should fail find booking by id", (done) => {
        chai 
        .request(server)
        .get("/bookings/1111")
        .end((err, res) => {
            chai.expect(err);
            chai.expect(res.status).to.equal(404);
            chai.expect(res.body.success).to.equal(false);
            return done();
        });
     });
