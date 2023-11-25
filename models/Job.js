const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    company_name: { type: String, required: true },
    company_location: { type: String },
    skills: { type: [String], required: true },
    experience_level: { type: String, required: true },
    type_of_employment: { type: String, required: true },
    salary_range: { type: String },
    experience: { type: String, required: true },
    education: { type: String, required: true },
    overview: { type: String, required: true },
    description: { type: String, required: true },
    requirements_and_responsibilities: { type: [String], required: true },
    time_posted: { type: Date },
    logo_url: { type: String },
    banner_url: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
