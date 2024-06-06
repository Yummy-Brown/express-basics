const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRouter");
const { logger } = require("./middlewares/all");

const mongo_url =
'mongodb+srv://rotimibrown8:rotimi1235@cluster0.8xkt5me.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDb = async () => {
  try {
    await mongoose.connect(mongo_url);
    app.listen(PORT, () => {
      console.log(`server running on port : ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connectDb();

// MIDDLEWARE

app.use(logger);
app.use(userRoutes);

// ERROR ROUTE MUST COME AFTER ALL OF YOUR VALID ROUTES

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found!" });
});
// app.all("*", (req, res) =>{
//     res.status(404).send("<span>ERROR PAGE </span> <a href= '/'> Back Home</a>");
// })


