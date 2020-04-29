import { app }  from '../src/app'
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
import { expect, request } from 'chai';

describe('Application Test sample', () => {
  
  it('Hit base URl', async() => {
  
    await request(app).get('/').then(res => {

      expect(res.body).to.eql(10);
      expect(res.status).to.eql(200);
      
    });
    
  })

  it('my API', async() => {
  
    await request(app).get('/api/test/my').then(res => {

      expect(res.status, 'HTTP Status code').to.eql(400);
      expect(res.body).to.a('object');
      expect(res.body).to.be.eql({
        success: false,
        error: 'Test error',
        traceback: ' Test trace back error',
        data: []
      })      
    });
    
  });
  
})