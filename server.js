const express = require("express");
const Router = require("express-promise-router");
const router = Router();

const { Pool, Client } = require("pg");
const pool = new Pool();

router.use("/users", async (req, res) => {
  const response = await pool.query(
    "SELECT id, first_name, last_name, username FROM users"
  );

  res.send(response.rows);
});

// pools will use environment variables
// for connection information

const app = express();

app.use(router);
app.use(express.static("client/build"));

app.listen(process.env.PORT || 4000);
