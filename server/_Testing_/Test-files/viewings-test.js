const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../testindex");

const Viewing = require("../../viewings/viewingsModel");

mocha.describe("CRUD testing", () => {
    let id;
    mocha.beforeEach((done) => {
        Viewing.deleteMany({})
        .then(() => {
            Viewing.create({
                _id:'1',
                id: 1,
                time: '4:45',
                screen: 3,
                movie: "Matilda",
                price: "£1.00"
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
        chai.request(server)
        .get(`/Viewings/1`)
        .end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.data.time).to.equal("4:45");
            chai.expect(res.body.data.screen).to.equal(3);
            chai.expect(res.body.data.movie).to.equal("Matilda");
            chai.expect(res.body.data.price).to.equal("£1.00");
            return done();
        });
    });
    mocha.it("should fail find viewing by id", (done) => {
        chai
        .request(server)
        .get("/Viewings/1111")
        .end((err, res) => {
            chai.expect(err);
            chai.expect(res.status).to.equal(404);
            chai.expect(res.body.success).to.equal(false);
            return done();
        });
    });
