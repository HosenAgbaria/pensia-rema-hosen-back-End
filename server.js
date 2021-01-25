const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT;
let articlesAboutDirector = require("./routes/article");

app.use(cors());
app.use(express.json());
app.get("/", function (req, res) {
  res.send(articlesAboutDirector);
});

app.listen(port || 3000);
