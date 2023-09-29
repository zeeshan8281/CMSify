const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app'); // Import your Express app

chai.use(chaiHttp);
chai.should();

describe('Headless CMS API', () => {
  // Define a test article
  const testArticle = {
    title: 'Test Article',
    content: 'This is a test article content.',
  };

  describe('/GET articles', () => {
    it('it should GET all articles', (done) => {
      chai
        .request(app)
        .get('/articles')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  describe('/POST articles', () => {
    it('it should POST an article', (done) => {
      chai
        .request(app)
        .post('/articles')
        .send(testArticle)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('title').eql(testArticle.title);
          res.body.should.have.property('content').eql(testArticle.content);
          done();
        });
    });
  });
});
