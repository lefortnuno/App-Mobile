const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config/.env" });

const personnelRoute = require("./routes/personnel.routes");
const serviceRoute = require("./routes/service.routes");
const endamniteRoute = require("./routes/endamnite.routes");
const payementRoute = require("./routes/payement.routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

app.use("/api/personnel", personnelRoute);
app.use("/api/service", serviceRoute);
app.use("/api/endamnite", endamniteRoute);
app.use("/api/payement", payementRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
