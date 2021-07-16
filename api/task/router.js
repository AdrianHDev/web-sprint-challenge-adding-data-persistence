// build your `/api/tasks` router here
const express = require("express");
const { getAllTasks, addNewTask } = require("./model");
const router = express.Router();

module.exports = router;
router.get("/", async (req, res) => {
  const tasks = await getAllTasks();
  res.json(
    tasks.map((task) => {
      {
        return { ...task, task_completed: task.task_completed != 0 };
      }
    })
  );
});

router.post("/", async (req, res) => {
  try {
    const newTask = await addNewTask(req.body);
    res
      .status(201)
      .json({ ...newTask, task_completed: Boolean(newTask.completed) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "internal server error" });
  }
});
