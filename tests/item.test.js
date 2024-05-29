const request = require('supertest');
const app = require('../src/app');
const pool = require('../src/config/database');

beforeAll(async () => {
    await pool.query('DELETE FROM items');
});

describe('Item Endpoints', () => {
    it('should create a new item', async () => {
        const res = await request(app)
            .post('/api/items')
            .send({
                name: 'Test Item',
                description: 'Test Description',
                startingPrice: 100.00,
                imageUrl: 'http://example.com/image.jpg',
                endTime: '2024-06-30T12:00:00Z',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
    });

    it('should get all items', async () => {
        const res = await request(app).get('/api/items');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

afterAll(async () => {
    await pool.end();
});
