const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const taskRouter = require("./routes/taskRoutes");

app.use(express.json());
app.use("/api/v1/tasks", taskRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}... and db connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
