const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = require("./routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Middleware untuk autentikasi admin
// app.use((req, res, next) => {
//   const { username, password } = req.headers;
//   if (username === 'admin' && password === 'admin') {
//     next();
//   } else {
//     res.status(401).send('Unauthorized');
//   }
// });

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(cors());
app.use(express.static('public'));
app.use(express.static('images'));
app.use(router);

const PORT = process.env.PORT || 3000;
// app.use(router);

app.get("/", function(req, res) {
  res.render("login")
});

app.get("/login", function(req, res) {
  res.render("login")
});

app.get("/complaints", function(req, res) {
  res.render("formpage")
});

app.get("/dashboard", function(req, res) {
  res.render("adminpage")
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });