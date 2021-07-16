// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAllResources = () => {
    return db('resources');
} 

const getResourceById = id => {
    return db('Resource').where({project_id: id})
}

const addNewResource = resource => {
    console.log(resource);
    return db('Resources').insert(resource).then(id => getResourceById(id).first());
}

module.exports = {
    getAllResources,
    addNewResource,
}