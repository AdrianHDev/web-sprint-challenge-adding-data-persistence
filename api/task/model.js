// build your `Task` model here
const db = require('../../data/dbConfig')


const getAllTasks = () => {
    return db('tasks').leftJoin('projects', 'tasks.project_id', 'projects.project_id');
} 

const getTaskById = id => {
    return db('tasks').where({task_id: id})
}

const addNewTask = task => {
    console.log(task);
    return db('tasks').insert(task).then(id => getTaskById(id).first());
}

module.exports = {
    getAllTasks,
    addNewTask,
}