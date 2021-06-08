const supertest = require("supertest");
const app = require("../../src/index");

test('GET /accountsType', async () => {
    const response = await supertest(app)
        .get('/accountsType');
 
    expect(response.statusCode).toEqual(200);
})