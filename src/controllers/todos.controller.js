const axios = require("axios");

exports.findAll = (req, res) => {
  // Call the json placeholder API to get a list of todos
  axios.get("https://jsonplaceholder.typicode.com/todos").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  // Call the json placeholder API to get a list of todos by ID
  axios
    .get("https://jsonplaceholder.typicode.com/todos/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
