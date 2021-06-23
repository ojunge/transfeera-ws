const supertest = require("supertest");
const app = require("../../src/index");

test('GET /banks-account-holder', async () => {
    const response = await supertest(app)
        .get('/banks-account-holder');
 
    expect(response.statusCode).toEqual(200);
})

//Find by name
test('GET /banks-account-holder?search=João', async () => {
    const response = await supertest(app)
        .get('/banks-account-holder?search=João');
 
    expect(response.statusCode).toEqual(200);
})

//Find by nif (cpf)
test('GET /banks-account-holder?search=96849319051', async () => {
    const response = await supertest(app)
        .get('/banks-account-holder?search=96849319051');
 
    expect(response.statusCode).toEqual(200);
})

// find by agency
test('GET /banks-account-holder?search=0001', async () => {
    const response = await supertest(app)
        .get('/banks-account-holder?search=0001');
 
    expect(response.statusCode).toEqual(200);
})

test('GET /banks-account-holder?search=0092847', async () => {
    const response = await supertest(app)
        .get('/banks-account-holder?search=0092847');
 
    expect(response.statusCode).toEqual(200);
})

test('GET /banks-account-holder/9999999', async () => {
    const response = await supertest(app)
        .get('/banks-account-holder/9999999');
 
    expect(response.statusCode).toEqual(200);
})
