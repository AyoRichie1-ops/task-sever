const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const taskRouter = require("./routes/taskRoutes");

// middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Goals Api!" });
});

app.use("/api/v1/tasks", taskRouter);

// Error Routes

app.use((req, res) => {
  res.status(404).json({ meessage: "Resource not found" });
});

// db Connections and server listening
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
