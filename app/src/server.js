const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "CloudOps Platform API",
    status: "running",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.get("/api/v1/tasks", (req, res) => {
  res.json({
    tasks: [
      { id: 1, title: "Deploy API to AWS ECS" },
      { id: 2, title: "Automate deployment with GitHub Actions" },
    ],
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`API listening on port ${port}`);
});
