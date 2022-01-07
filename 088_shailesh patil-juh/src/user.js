const mysql = require("mysql");
const Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project2",
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `insert into MESSAGE (message) values (?)`;

  await connection.queryAsync(sql, [user.message]);
  console.log("message added");

  await connection.endAsync();
};

const user = { message: "hello" };

//addUser(user);

const selectAllUsers = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  const sql = `select * from MESSAGE`;
  const list = await connection.queryAsync(sql);
  await connection.endAsync();
  console.log(list);
  return list;
};

//selectAllUsers();

module.exports = { selectAllUsers, addUser };
