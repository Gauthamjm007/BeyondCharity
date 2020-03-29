const express = require("express");
const app = express();
const router = require("./config/routes");
const setupDB = require("./config/database");
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/", router);
setupDB();

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}.........`);
});
