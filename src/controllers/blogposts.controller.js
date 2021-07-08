const axios = require("axios");

exports.findAll = (req, res) => {
  // Call the json placeholder API to get a list of blog posts
  axios.get("https://jsonplaceholder.typicode.com/posts").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  // Call the json placeholder API to get a list of blog posts
  axios
    .get("https://jsonplaceholder.typicode.com/posts/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
