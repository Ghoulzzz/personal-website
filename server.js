const express = require('express');

const app = express();

app.engine("html", require("ejs").renderFile);
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.get("/", function (req, res) {
	res.status(200).render(__dirname + "/public/homepage.html");
});

app.listen(80);
