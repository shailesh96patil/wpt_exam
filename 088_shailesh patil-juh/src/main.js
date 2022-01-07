const express = require("express");
const { selectAllUsers, addUser } = require("./user");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.get("/users", async (req, res) => {
  const list = await selectAllUsers();
  res.json(list);
});

app.post("/adduser", async (req, res) => {
  const user = req.body;
  console.log(user);
  await addUser(user);
  res.json({ md: "new message" });
});

app.listen("7002", () => {
  console.log("server started");
});
