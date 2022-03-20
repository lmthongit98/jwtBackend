import userService from "../service/userService";

const handleHelloWorld = (req, res) => {
  return res.render("home");
};

const handleUserPage = async (req, res) => {
  const users = await userService.getUserList();
  
  return res.render("user", {users});
};

const handleCreateNewUser = (req, res) => {
  const userInfo = {...req.body};
  
  userService.createNewUser(userInfo);

  return res.send("handleCreateNewUser");
};;

module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
};
