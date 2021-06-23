const supertest = require("supertest");
const app = require("../../src/index");

test('GET /accounts-type', async () => {
    const response = await supertest(app)
        .get('/accounts-type');
 
    expect(response.statusCode).toEqual(200);
})