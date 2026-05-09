const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

const validPayload = () => ({
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '+14155552671',
  message: 'Hello from the test suite.',
});

describe('Contact API', () => {
  beforeAll(async () => {
    await mongoose.connection.asPromise();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('POST /api/contact', () => {
    it('returns 200 when the form is valid', async () => {
      const res = await request(app)
        .post('/api/contact')
        .send(validPayload())
        .expect(200);

      expect(res.body).toEqual({ message: 'Form submitted successfully' });
    });

    it('returns 400 with validation errors for missing or invalid fields', async () => {
      const res = await request(app)
        .post('/api/contact')
        .send({})
        .expect(400);

      expect(Array.isArray(res.body.errors)).toBe(true);
      expect(res.body.errors.some((e) => e.msg === 'Name is required')).toBe(true);
      expect(res.body.errors.some((e) => e.msg === 'Invalid email address')).toBe(true);
      expect(res.body.errors.some((e) => e.msg === 'Invalid phone number')).toBe(true);
      expect(res.body.errors.some((e) => e.msg === 'Message is required')).toBe(true);
    });
  });
});
