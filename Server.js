const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Regsiter = require("./Routes/User.routes");
const verifyToken = require("./Routes/Verify.routes");
const bodyParser = require("body-parser");
const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("This is Home Page");
});
app.use('/user',Regsiter);
app.use('/',verifyToken)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
