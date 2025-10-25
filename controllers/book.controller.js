const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const resultGetAllData = await Book.find().select("title author -_id");
    if (resultGetAllData?.length > 0) {
      res.status(200).json({
        sucess: true,
        message: "List of books fetched successfully",
        data: resultGetAllData,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, Please try again",
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const bookDetailsById = await Book.findById(getCurrentBookId);

    if (!bookDetailsById) {
      return res.status(404).json({
        success: false,
        message:
          "Book with current Id is nit found ! Please try with another Id",
      });
    }

    res.status(200).json({
      success: true,
      data: bookDetailsById,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, Please try again",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;

    const resultAddNewBook = await Book.create(newBookFormData);
    if (resultAddNewBook) {
      res.status(200).json({
        success: true,
        message: "Book added successfully",
        data: resultAddNewBook,
      });
    }
  } catch (err) {
    console.error("not added book", err);
    res.status(500).json({
      success: false,
      message: "Something went wrong, Please try again",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookId,
      {
        $set: {
          title: "Srimad BhagvadGeetaJi",
          author: "Lord Sri Krishna Gopal Madhav",
        },
      },
      { new: true }
    );

    if (!updatedBook) {
      res
        .status(404)
        .json({ sucess: false, message: "Book not found with is this id" });
    }

    res.status(200).json({
      sucess: true,
      message: "updated successfully",
      data: updatedBook,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, Please try again",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const deleteBook = await Book.findByIdAndDelete(getCurrentBookId);
    if (!deleteBook) {
      res
        .status(404)
        .json({ sucess: false, message: "Book is not found with this Id" });
    }

    res
      .status(200)
      .json({ sucess: true, message: "book is deleted", data: deleteBook });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, Please try again",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook,
};
