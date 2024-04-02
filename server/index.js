const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//////////////////////ROUTES///////////////////////////

//create
app.route("/user", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (username,email,password) VALUES($1,$2,$3) RETURNING *",
      [username, email, password]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
//get

//post

//delete

//port listen
app.listen(5000, () => {
  console.log("server has started on port 5000");
});
