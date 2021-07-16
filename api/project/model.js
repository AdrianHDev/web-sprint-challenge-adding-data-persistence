// build your `Project` model here
const db = require('../../data/dbConfig')

const getAllProjects = () => {
    return db('projects');
} 

const getProjectById = id => {
    return db('projects').where({project_id: id})
}

const addNewProject = project => {
    return db('projects').create(project).then(id => getProjectById(id))
}

module.exports = {
    getAllProjects,
    addNewProject
}