const express = require("express");
const {
  getMovies,
  createMovies,
  getMovieById,
} = require("../controllers/movies");

const router = express.Router();

router.get("/", getMovies);
router.post("/create", createMovies);
router.get("/:id", getMovieById);

module.exports = router;
