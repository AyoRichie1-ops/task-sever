const Tasks = require("../models/task");
// get all tasks
const getAllTask = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
// get a single task
const getSingleTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Tasks.findById({ _id: taskId });
    res.status(200).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
// create a  tasks
const createTask = async (req, res) => {
  const { title, description, tag } = req.body;
  if (!title || !description || !tag) {
    return res
      .status(400)
      .json({ success: false, error: "Please provide necessary information" });
  }
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// update a task

const updateTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Tasks.findByIdAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
// delete a task

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Tasks.findByIdAndDelete({ _id: taskId });
    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {}
};
module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
