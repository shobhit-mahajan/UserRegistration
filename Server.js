// Packages
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Regsiter = require("./Routes/User.routes");
const verifyToken = require("./Routes/Verify.routes");
const bodyParser = require("body-parser");
//variable
const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();
//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use('/user',Regsiter);
app.use('/',verifyToken);
// database connection
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
// server port
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
