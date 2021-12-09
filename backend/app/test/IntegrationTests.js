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
        assert(parsed.length === 2);
        const article = parsed[0];
        assert(article.category);
        assert(article.title);
        assert(article.title.regionalText.length === 2);
        assert(article.subtext);
        assert(article.subtext.regionalText.length === 2);
        assert(article.key);
        assert(article.key.regionalText.length === 2);
    });

    it('Query articles should fail without Authorization', async () => {
        const r = await supertest(app)
            .get('/api/articles')
            .expect(401);
    });

    it('Should query all resources', async () => {
        const r = await supertest(app)
            .get('/api/resources')
            .set('Authorization', '123')
            .expect(200);
        const parsed = JSON.parse(r.text);
        assert(parsed.length === 21);
        const res = parsed[0];
        assert(res.category);
        assert(res.title);
    });

    it('Query resources should fail without Authorization', async () => {
        const r = await supertest(app)
            .get('/api/resources')
            .expect(401);
    });

    it('Should find the article with english key', async () => {
        const r = await supertest(app)
            .get('/api/article/weston-price-traditional-diets')
            .set('Authorization', '123')
            .expect(200);
        const parsed = JSON.parse(r.text);
        assert(parsed.id === 1);
    });

    it('Should find the article with german key', async () => {
        const r = await supertest(app)
            .get('/api/article/weston-price-traditional-diets')
            .set('Authorization', '123')
            .expect(200);
        const parsed = JSON.parse(r.text);
        assert(parsed.id === 1);
    });

    it('Should not find anything with an key', async () => {
        const r = await supertest(app)
            .get('/api/article/DieWostonPriceStudie')
            .set('Authorization', '123')
            .expect(404);
    });

    it('query article by key should fail without Authorization', async () => {
        const r = await supertest(app)
            .get('/api/article/DieWestonPriceStudie')
            .expect(401);
    });

});