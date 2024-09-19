const request = require('supertest');
const app = require('./app'); 

describe('API de produtos', () => {
  it('deve criar um novo produto', async () => {
    const response = await request(app)
      .post('/products')
      .send({ name: 'Produto Teste', price: 10 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('name', 'Produto Teste');
  });

  
  it('deve editar um produto existente', async () => {
  });

});