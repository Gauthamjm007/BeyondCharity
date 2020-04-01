const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./config/routes");
const setupDB = require("./config/database");
const PORT = process.env.PORT || 4000;
var corsOptions = {
  exposedHeaders: ["content-Type", "x-auth"]
};

app.use(cors(corsOptions));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use("/", router);
setupDB();

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}.........`);
});
