const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Project = require('../models/Project');

const sampleProject = () => ({
  title: 'Test project',
  image: '/public/project.png',
  imageAlt: 'Project screenshot',
  desc: 'Integration test project',
  tools: ['Node.js', 'Express'],
  link: { url: 'https://github.com/example/repo', label: 'Repository' },
});

describe('Projects API', () => {
  beforeAll(async () => {
    await mongoose.connection.asPromise();
  });

  afterEach(async () => {
    await Project.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('GET /api/projects', () => {
    it('returns an empty list when no projects exist', async () => {
      const res = await request(app).get('/api/projects').expect(200);

      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body).toHaveLength(0);
    });

    it('returns projects newest-first by createdAt', async () => {
      await Project.create({
        ...sampleProject(),
        title: 'Older',
      });
      await Project.create({
        ...sampleProject(),
        title: 'Newer',
      });

      const res = await request(app).get('/api/projects').expect(200);

      expect(res.body).toHaveLength(2);
      expect(res.body.map((p) => p.title)).toEqual(['Newer', 'Older']);
    });
  });

  describe('POST /api/projects', () => {
    it('creates a project and returns 201', async () => {
      const payload = sampleProject();

      const res = await request(app)
        .post('/api/projects')
        .send(payload)
        .expect(201);

      expect(res.body.title).toBe(payload.title);
      expect(res.body.image).toBe(payload.image);
      expect(res.body.imageAlt).toBe(payload.imageAlt);
      expect(res.body.desc).toBe(payload.desc);
      expect(res.body.tools).toEqual(payload.tools);
      expect(res.body.link).toEqual(payload.link);
      expect(res.body._id).toBeDefined();

      const stored = await Project.findById(res.body._id);
      expect(stored).not.toBeNull();
      expect(stored.title).toBe(payload.title);
    });

    it('returns 400 when required fields are missing', async () => {
      const res = await request(app)
        .post('/api/projects')
        .send({ title: 'Incomplete' })
        .expect(400);

      expect(res.body).toHaveProperty('message');
      expect(typeof res.body.message).toBe('string');
    });
  });

  describe('GET /api/projects/:id', () => {
    it('returns a project when the id exists', async () => {
      const created = await Project.create(sampleProject());

      const res = await request(app)
        .get(`/api/projects/${created.id}`)
        .expect(200);

      expect(res.body._id).toBe(created.id);
      expect(res.body.title).toBe(created.title);
    });

    it('returns 404 when the id is valid but not found', async () => {
      const id = new mongoose.Types.ObjectId().toString();

      const res = await request(app).get(`/api/projects/${id}`).expect(404);

      expect(res.body).toEqual({ message: 'Project not found' });
    });
  });

  describe('PUT /api/projects/:id', () => {
    it('updates a project', async () => {
      const created = await Project.create(sampleProject());

      const res = await request(app)
        .put(`/api/projects/${created.id}`)
        .send({ title: 'Updated title' })
        .expect(200);

      expect(res.body.title).toBe('Updated title');
      expect(res.body.desc).toBe(created.desc);

      const stored = await Project.findById(created.id);
      expect(stored.title).toBe('Updated title');
    });

    it('returns 404 when the id is valid but not found', async () => {
      const id = new mongoose.Types.ObjectId().toString();

      const res = await request(app)
        .put(`/api/projects/${id}`)
        .send({ title: 'Nope' })
        .expect(404);

      expect(res.body).toEqual({ message: 'Project not found' });
    });

    it('returns 400 when update violates schema validation', async () => {
      const created = await Project.create(sampleProject());

      await request(app)
        .put(`/api/projects/${created.id}`)
        .send({ title: '' })
        .expect(400);
    });
  });

  describe('DELETE /api/projects/:id', () => {
    it('deletes a project', async () => {
      const created = await Project.create(sampleProject());

      const res = await request(app)
        .delete(`/api/projects/${created.id}`)
        .expect(200);

      expect(res.body).toEqual({ message: 'Project deleted successfully' });

      const stored = await Project.findById(created.id);
      expect(stored).toBeNull();
    });

    it('returns 404 when the id is valid but not found', async () => {
      const id = new mongoose.Types.ObjectId().toString();

      const res = await request(app).delete(`/api/projects/${id}`).expect(404);

      expect(res.body).toEqual({ message: 'Project not found' });
    });
  });
});
