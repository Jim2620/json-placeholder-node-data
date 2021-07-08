// this router handles all requests to /api/todos end point

module.exports = (app) => {
    const router = require("express").Router();
    const controller = require("../controllers/todos.controller");
  
    // GET all todos
    router.get("/", controller.findAll);
  
    // GET a todos by ID
    router.get("/:id", controller.findById);
  
    app.use("/api/todos", router);
  };
  