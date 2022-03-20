import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
  return bcrypt.hashSync(userPassword, salt);
}

const createNewUser = ({email, password, username}) => {
  const hashPass = hashPassword(password);
  connection.query(
    `INSERT INTO users (email, password, username)
     VALUES (?, ?, ?);`, [email, hashPass, username],
    function (err, results, fields) {
     if(err){
       console.log(err);
     }
    }
  );
}

const getUserList = async () => {
  // create the connection, specify bluebird as Promise
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute("SELECT * from users");
    return rows;
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
    getUserList,
    createNewUser,
}