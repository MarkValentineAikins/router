const getUsers = (req, res) => {
  res.status(200).send("Get all Users");
};

const createUser = (req, res) => {
  res.status(201).send("User has been saved");
};

const updateUser = (req, res) => {
  res.status(200).send("User has been updated");
};

const deleteUser = (req, res) => {
  res.status(200).send("User has been deleted");
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
