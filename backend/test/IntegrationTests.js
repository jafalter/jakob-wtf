const assert = require('assert');
const supertest = require('supertest');

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
        console.log("Hi");
    });

});