const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

/**
 * Get all projects
 */
router.get('/api/projects', async (req, res) => {
  try {
    const projects = await projectController.getProjects();
    res.json({ projects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * Get project by id
 */
router.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await projectController.getProjectById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * Create project
 */
router.post('/api/projects', async (req, res) => {
  try {
    const project = await projectController.createProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * Update project
 */
router.put('/api/projects/:id', async (req, res) => {
  try {
    const project = await projectController.updateProject(
      req.params.id,
      req.body
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * Delete project
 */
router.delete('/api/projects/:id', async (req, res) => {
  try {
    const project = await projectController.deleteProject(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
