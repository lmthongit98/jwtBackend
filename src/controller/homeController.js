const handleHelloWorld = (req, res) => {
    return res.render("home");
}

const handleUserPage = (req, res) => {
    return res.render("user");
}

module.exports = {
  handleHelloWorld,
  handleUserPage,
};