const request = require('supertest');
const Currency = require('../models/currency');
const server = require('../server');


beforeAll(async () => {
  await Currency.deleteMany({});
});

describe('/api/currency', () => {
  describe('GET /', () => {
    const currency = { name: "tezos", hour: "-3.10%", day: "-7.47%", month: "-44.69%", Volume: "46,048,752", MarketCap: "824,588,509" };
    const exec = () =>
      request(server).get(`/api/currency/`)

    beforeAll(async () => {
      await Currency.insert(currency);
    });

    afterAll(async () => {
      await Currency.deleteMany({});
    });

    it('should return all coins', async () => {
      const res = await exec();
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('data');
      expect(res.body.data.length).toBeGreaterThanOrEqual(1);
    });
  });

  // describe('POST /', () => {
  //   const exec = body =>
  //     request(server)
  //       .post(`/api/currency`)
  //       .send(body);

  //   it('should return 201 if all fields are valid', async () => {
  //     const currency = { name: "tezos", hour: "-3.10%", day: "-7.47%", month: "-44.69%", Volume: "46,048,752", MarketCap: "824,588,509" };
  //     const res = await exec(currency);
  //     expect(res.status).toBe(201);
  //   });
  // });

});