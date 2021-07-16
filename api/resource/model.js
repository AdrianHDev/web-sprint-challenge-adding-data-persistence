// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAllResources = () => {
    return db('resources');
} 

const getResourceById = id => {
    return db('resources').where({resource_id: id})
}

const addNewResource = resource => {
    console.log(resource);
    return db('resources').insert(resource).then(id => getResourceById(id).first());
}

module.exports = {
    getAllResources,
    addNewResource,
}