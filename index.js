const express = require("express");
const app = express();
const PORT = 5001;

const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost:27017/SHOP23");
db.finally(res => {
    console.log("db connected")
})

//user routes
const user_route = require("./routes/userRoutes");

app.use("/api", user_route);


app.listen(PORT, (err) => {
    console.log("Server started at port " + PORT)
})
