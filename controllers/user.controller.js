let users = require("../public/users.json");

module.exports.getAllUser = (req, res, next) => {
  const { limit } = req.query;
  const limitedUsers = users.slice(0, limit);
  res.json(limitedUsers);
};
module.exports.getRandomUser = (req, res, next) => {
  const id = Math.ceil(Math.random() * 5);
  console.log(id);
  const user = users.find((user) => user.id === id);
  res.send(user);
};
module.exports.saveAUser = (req, res, next) => {
  const body = req.body;
  const user = users[0];
  const keys = Object.keys(user);
  keys.map((key) => {
    if (!body.hasOwnProperty(key)) {
      res.send(`missing ${key} property`);
    }
  });
  users.push(body);
  res.send(users);
};

module.exports.updateAUser = (req, res, next) => {
  const id = req.params.id;
  const userFound = users.find((user) => user.id == id);
  if (!userFound) {
    res.send("No User Found");
  } else {
    const body = req.body;
    const user = users.find((user) => user.id == id);
    const data = {
      ...user,
      ...body,
    };
    res.send(data);
  }
};

module.exports.updateMultipleUsers = (req, res, next) => {
  res.send("Users Updated");
};

module.exports.deleteAUser = (req, res, next) => {
  const id = req.params.id;
  const userFound = users.find((user) => user.id == id);
  if (!userFound) {
    res.send("No User Found");
  } else {
    const newUsers = users.filter((user) => user.id !== parseInt(id));
    res.send(newUsers);
  }
};
