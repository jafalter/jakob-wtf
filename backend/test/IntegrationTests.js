const assert = require('assert');
const supertest = require('supertest');
const app = require('../app');

const Factory = require('../lib/Factory');
const TestUtils = require('./TestUtils');

const sequelize = Factory.getORM();

describe('Integration Tests', () => {

    before(async () => {
        await sequelize.sync({ force: true });
        await TestUtils.insertSeedData(sequelize);
    });

    after(async () => {
        sequelize.drop();
    });

    it('Should query all articles', async () => {
        const r = await supertest(app)
            .get('/api/articles')
            .set('Authorization', '123')
            .expect(200);
        const parsed = JSON.parse(r.text);
        console.log("Hi");
    });

    it('Should query all resources', async () => {
        const r = await supertest(app)
            .get('/api/resources')
            .set('Authorization', '123')
            .expect(200);
        const parsed = JSON.parse(r.text);
        console.log("Hi");
    });

});