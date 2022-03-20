import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
  return bcrypt.hashSync(userPassword, salt);
}

const createNewUser = async ({email, password, username}) => {
  const hashPass = hashPassword(password);

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "jwt",
    Promise: bluebird,
  });

  try {
     const [rows, fields] = await connection.execute(
       `INSERT INTO users (email, password, username)
        VALUES (?, ?, ?);`,
       [email, hashPass, username]
     );
  } catch (error) {
    console.log(error);
  }
}

const updateUser = async ({ email, id, username }) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      `UPDATE users SET email = ?, username = ?
       WHERE id = ?`,
      [email, username, id]
    );

    return rows;
  } catch (error) {
    console.log(error);
  }
};

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

const deleteUser = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      `DELETE from users WHERE id=?`, [id]
    );

    return rows;
  } catch (error) {
    console.log(error);
  }
}

const getUserById = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      `SELECT * from users WHERE id=?`, [id]
    );

    return rows;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getUserList,
  createNewUser,
  deleteUser,
  getUserById,
  updateUser,
};