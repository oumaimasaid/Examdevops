import { assert } from 'chai';
import request from 'supertest';
import app from 'C:\Users\oumaima\Desktop\nodebestpractices-master';

describe('Integration Tests', () => {
    it('GET /items - should return an array of items', (done) => {
        request(app)
            .get('/items')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                assert.isArray(res.body.items, 'Response should be an array');
                done();
            });
    });

    it('POST /items - should add a new item', (done) => {
        const newItem = { name: 'New Item' };

        request(app)
            .post('/items')
            .send(newItem)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                assert.isNumber(res.body.id, 'Response should contain the new item ID');
                done();
            });
    });
});
