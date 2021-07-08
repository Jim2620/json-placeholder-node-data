const axios = require("axios");

exports.findAll = (req, res) => {
  // Call the json placeholder API to get a list of users
  axios.get("https://jsonplaceholder.typicode.com/users").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  // Call the json placeholder API to get a list of users by ID
  axios
    .get("https://jsonplaceholder.typicode.com/users/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
