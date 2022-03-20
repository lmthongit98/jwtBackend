import userService from "../service/userService";

const handleHelloWorld = (req, res) => {
  return res.render("home");
};

const handleUserPage = async (req, res) => {
  const users = await userService.getUserList();
  
  return res.render("user", {users});
};

const handleCreateNewUser = async (req, res) => {
  const userInfo = {...req.body};
  
  await userService.createNewUser(userInfo);

  return res.redirect("/user");
};

const handleDeleteUser = async (req, res) => {
  const {id} = req.params;
  
  await userService.deleteUser(id);

  return res.redirect("/user");
}

module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
};
