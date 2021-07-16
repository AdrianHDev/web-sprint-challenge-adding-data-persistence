const express = require("express");
const router = express.Router();
const { getAllProjects, addNewProject } = require("./model");
router.get('/', async (req, res) => {
    const projects = await getAllProjects();
    res.json(projects)
})

router.post('/', async (req, res) => {
    console.log(req.body);
    try {   
        const newProject = await addNewProject(req.body)
        res.status(201).json(newProject)
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'internal server error'})
    }
})

module.exports = router;
