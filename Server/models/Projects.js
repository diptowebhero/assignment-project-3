const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  proj_name: {
    type: String,
  },
  proj_desc: {
    type: String,
  },
  prod_owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  mgr_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  team_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
