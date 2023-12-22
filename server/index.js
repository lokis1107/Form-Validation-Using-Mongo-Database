const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

//Schema Section
const schemaData = mongoose.Schema(
  {
    name: String,
    email: String,
    mobile: String,
    address: String,
    lat: String,
    long: String,
  },
  {
    timestamps: true,
  }
);
const userModal = mongoose.model("user", schemaData);

// Mongo DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/form");

//Data Reading Section
app.get("/", async (req, res) => {
  const data = await userModal.find({});
  res.json({ success: true, data: data });
});

//Data Creating Section
app.post("/create", async (req, res) => {
  const data = new userModal(req.body);
  await data.save();
  res.send({ success: true, message: "Data added successfully" });
});

app.listen(PORT, () => console.log("The server will be start"));
