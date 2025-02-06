const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  experience: {
    clients: {
      type: Number,
    },
    years: {
      type: Number,
    },
    projects: {
      type: Number,
    },
  },
  about: {
    type: String,
  },
  skill: {
    list: [{ type: String }],
    text: {
      type: String,
    },
  },
  projects: [
    {
      title: { type: String },
      description: { type: String },
      link: { type: String },
      picture: { type: String },
    },
  ],
  contacts: [
    {
      description: { type: String },
      title: { type: String },
      link: { type: String },
    },
  ],
  footer: {
    type: String,
  },
});

const dataModel = new mongoose.model("data", dataSchema);

module.exports = {
  dataModel,
};
