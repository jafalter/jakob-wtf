const fs = require('fs');
const path = require('path');
const { QueryTypes } = require('sequelize');

const Language = require('../persistence/models/Language');
const Category = require('../persistence/models/Category');
const Text = require('../persistence/models/Text');
const ResourceType = require('../persistence/models/ResourceType');
const Resource = require('../persistence/models/Resource');
const Article = require('../persistence/models/Article');
const RegionalText = require('../persistence/models/RegionalText');
const Visit = require('../persistence/models/Visit');

const Factory = require('../lib/Factory');

const seq = Factory.getORM();

class TestUtils {

    /**
     *
     * @return {Promise<void>}
     */
    static async insertSeedData() {
        const seed = fs.readFileSync(path.join(__dirname, '/seed.sql'), 'utf-8');
        const split = seed.split('INSERT INTO');
        for (let sp of split) {
            if( sp.length > 0 ) {
                const stmt = "INSERT INTO " + sp.replace(/(\r\n|\n|\r)/gm, "");
                await seq.query(stmt, { type : QueryTypes.INSERT});
            }
        }
    }

}

module.exports = TestUtils;