const supertest = require("supertest");
const app = require("../../src/index");

test('GET /banks', async () => {
    const response = await supertest(app)
        .get('/banks');
 
    expect(response.statusCode).toEqual(200);
})