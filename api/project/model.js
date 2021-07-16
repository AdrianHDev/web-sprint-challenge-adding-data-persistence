// build your `Project` model here
const db = require('../../data/dbConfig')

const getAllProjects = () => {
    return db('projects');
} 

const getProjectById = id => {
    return db('projects').where({project_id: id})
}

const addNewProject = project => {
    console.log(project);
    return db('projects').insert(project).then(id => getProjectById(id).first());
}

module.exports = {
    getAllProjects,
    addNewProject
}