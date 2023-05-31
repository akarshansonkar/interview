var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.get("/input", function (req, res) {
  var a = Number(req.query.first);
  var b = Number(req.query.sec);
  if (a > b) {
    response = a;
  } else {
    response = b;
  }
  res.end(JSON.stringify(response));
});

app.listen(3000, () => {
  console.log(" hello");
});
