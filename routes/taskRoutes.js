const express = require("express");
const router = express.Router();
const {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// router.get("/", getAllTask);
// router.post("/", createTask);

router.route("/").get(getAllTask).post(createTask);

// router.get("/:taskId", getSingleTask);
// router.patch("/:taskId", updateTask);
// router.delete("/:taskId", deleteTask);
router
  .route("/:taskId")
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteTask);

module.exports = router;
