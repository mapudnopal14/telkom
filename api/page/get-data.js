const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.url_true);
const api1 = supertest(process.env.url_false);
const api2 = supertest(process.env.url_format);

const telkom = () => api
    .get('')

const telkom1 = () => api1
    .get('')

const telkom2 = () => api2
    .get('')

module.exports = {
    telkom,telkom1,telkom2
};