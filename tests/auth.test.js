const request = require('supertest');
const app = require('../src/app');
const pool = require('../src/config/database');

beforeAll(async () => {
    await pool.query('DELETE FROM users');
});

describe('Auth Endpoints', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
    });

    it('should login a user', async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'test@example.com',
                password: 'password123',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});

afterAll(async () => {
    await pool.end();
});
