// get the client
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "jwt",
  port: 3306
});

const handleHelloWorld = (req, res) => {
  return res.render("home");
};

const handleUserPage = (req, res) => {
  return res.render("user");
};

const handleCreateNewUser = (req, res) => {
  const {email, password, username} = req.body;

  connection.query(
    `INSERT INTO users (email, password, username) 
     VALUES (?, ?, ?);`, [email, password, username],
    function (err, results, fields) {
     if(err){
       console.log(err);
     }else {
       console.log(results);
     }
    }
  );
  return res.send("handleCreateNewUser");
};

module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
};
