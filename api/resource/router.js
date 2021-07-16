// build your `/api/resources` router here
const express = require('express');
const { addNewResource, getAllResources } = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
    const resources = await getAllResources();
    res.json(resources)
})

router.post('/', async (req, res) => {
    try {   
        const newResource = await addNewResource(req.body)
        res.status(201).json(newResource)
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'internal server error', ...err})
    }
})

module.exports = router;
