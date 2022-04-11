const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/AuthRoute");
const typeRoute = require("./routes/TypeCharityRoute");
const organizationRoute = require("./routes/Organization");
const postRoute = require("./routes/PostRoute");
const cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://charitysupport:${process.env.DB_PASSWORD}@cluster0.lticw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    console.log("connected to db");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
connectDB();

app.use("/api/auth", authRoute);
app.use("/api/type", typeRoute);
app.use("/api/organization", organizationRoute);
app.use("/api/post", postRoute);

const PORT = 4001;
app.listen(PORT, () => console.log(`server is running in port : ${PORT}`));
