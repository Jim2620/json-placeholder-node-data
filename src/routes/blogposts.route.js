// this router handles all requests to /api/blogposts end point

module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/blogposts.controller");

  // GET all posts
  router.get("/", controller.findAll);

  // GET a student by ID
  router.get("/:id", controller.findById);

  app.use("/api/blogposts", router);
};
