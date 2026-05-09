const mongoose = require('mongoose');

const { Schema, model } = mongoose;
/**
 * Project link schema
 * Links are stored as an array of objects with a URL and label.
 */
const projectLinkSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    label: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

/**
 * Project schema
 */
const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    imageAlt: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
    tools: {
      type: [String],
      required: true,
      default: [],
    },
    link: {
      type: projectLinkSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Project model
 */
const Project = model("Project", projectSchema);

module.exports = Project;
