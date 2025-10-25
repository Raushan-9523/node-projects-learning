const express = require("express");

const router = express.Router();
const bookController = require("../controllers/book.controller");
const book = require("../models/book");

// all routes that are related to books only
router.get("/getBooks", bookController.getAllBooks);

router.get("/getBook/:id", bookController.getSingleBook);

router.post("/addBook", bookController.addNewBook);

router.delete("/deleteBook/:id", bookController.deleteBook);

router.put("/updateBook/:id", bookController.updateBook);

module.exports = router;
