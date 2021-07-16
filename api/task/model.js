// build your `Task` model here
const db = require('../../data/dbConfig')


const getAllTasks = () => {
    return db('tasks');
} 

const getTaskById = id => {
    return db('task').where({project_id: id})
}

const addNewTask = task => {
    console.log(task);
    return db('tasks').insert(task).then(id => getTaskById(id).first());
}

module.exports = {
    getAllTasks,
    addNewTask,
}