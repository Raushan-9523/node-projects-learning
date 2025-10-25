require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./database/db.js");

const bookRoutes = require("./routes/book.routes.js");

const port = process.env.PORT || 3000;

// connect to our database
connectDB();

//middleware -> expres().json() parse json information
app.use(express.json());

//routes here

app.use("/api/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
