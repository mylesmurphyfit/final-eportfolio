const Project = require("../models/Project");

/**
 * Get all projects
 */
const getProjects = async () => {
  return Project.find().sort({ createdAt: -1 });
};

/**
 * Get a project by ID
 */
const getProjectById = async (id) => {
  return Project.findById(id);
};

/**
 * Create a project
 */
const createProject = async (projectData) => {
  return Project.create(projectData);
};

/**
 * Update a project
 */
const updateProject = async (id, projectData) => {
  return Project.findByIdAndUpdate(id, projectData, {
    new: true,
    runValidators: true,
  });
};

/**
 * Delete a project
 */
const deleteProject = async (id) => {
  return Project.findByIdAndDelete(id);
};

/**
 * Export the project controller functions
 */
module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
