const express = require("express");
const router = express.Router();
const { getAllProjects, addNewProject } = require("./model");
router.get("/", async (req, res) => {
  const projects = await getAllProjects();
  res.json(
    projects.map((proj) => {
      console.log(proj);
      return { ...proj, project_completed: Boolean(proj.project_completed) };
    })
  );
});

router.post("/", async (req, res) => {
  try {
    const newProject = await addNewProject(req.body);
    res.status(201).json( { ...newProject, project_completed: newProject.project_completed !== 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "internal server error" });
  }
});

module.exports = router;
