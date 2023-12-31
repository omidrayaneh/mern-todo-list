const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { MONGO_URL, PORT } = process.env;
const routes = require("./routes/api");
const bodyParser = require("body-parser");

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));
  mongoose.Promise = global.Promise;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);

});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api", routes);

app.use(express.json());

app.use("/", authRoute);