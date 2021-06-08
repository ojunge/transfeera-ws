const supertest = require("supertest");
const app = require("../../src/index");

test('GET /favorites', async () => {
    const response = await supertest(app)
        .get('/favorites');
 
    expect(response.statusCode).toEqual(200);
})

//Find by name
test('GET /favorites?search=João', async () => {
    const response = await supertest(app)
        .get('/favorites?search=João');
 
    expect(response.statusCode).toEqual(200);
})

//Find by nif (cpf)
test('GET /favorites?search=96849319051', async () => {
    const response = await supertest(app)
        .get('/favorites?search=96849319051');
 
    expect(response.statusCode).toEqual(200);
})

// find by agency
test('GET /favorites?search=0001', async () => {
    const response = await supertest(app)
        .get('/favorites?search=0001');
 
    expect(response.statusCode).toEqual(200);
})

test('GET /favorites?search=0092847', async () => {
    const response = await supertest(app)
        .get('/favorites?search=0092847');
 
    expect(response.statusCode).toEqual(200);
})

test('GET /favorites/9999999', async () => {
    const response = await supertest(app)
        .get('/favorites/9999999');
 
    expect(response.statusCode).toEqual(200);
})

test('DELETE /favorites/9999999', async () => {
    const response = await supertest(app)
        .delete('/favorites/9999999');
 
    expect(response.statusCode).toEqual(500);
})