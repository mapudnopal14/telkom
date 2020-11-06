const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const page = require('../page/get-data.js');
const data = require('../data/data.json');
const schema = require('../data/schema.json');
const schema1 = require('../data/schema1.json');

const testCase = {
    positive: {
        validation: 'Test Passed, Total is, Rp 52.000.000'
    },
    negative: {
        validation: 'Test Failed, Total Rp 20.000.000 is false, total is must be Rp 52.000.000'
    }
};

const dataType = {
    positive: {
        validation: 'Test Passed, Data Type is (String,Boolean,Number)'
    },
    negative: {
        validation: 'Test Failed, Data Type is (String,Boolean,Number)'
    }
};

describe(`TestCase negative`,() =>{
    it(`@get @validation ${testCase.negative.validation}`, async () =>{
        const response = await page.telkom1();
        assert(response.status).to.equal(200, response.body);
        assert(response.body.total).to.equal(data.false);
        });
});
describe(`TestCase positive`,() =>{
    it(`@get @validation ${testCase.positive.validation}`, async () =>{
        const response = await page.telkom();
        assert(response.status).to.equal(200, response.body);
        assert(response.body.total).to.equal(data.true);
        });
});

describe(`TestCase positive`,() =>{
    it(`@get @validation ${dataType.positive.validation}`, async () =>{
        const response = await page.telkom();
        assert(response.status).to.equal(200, response.body);
        assert(response.body).to.be.jsonSchema(schema);
        });
});
describe(`TestCase negative`,() =>{
    it(`@get @validation ${dataType.negative.validation}`, async () =>{
        const response = await page.telkom2();
        assert(response.status).to.equal(200, response.body);
        assert(response.body).to.be.jsonSchema(schema1);
        });
});