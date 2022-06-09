const prisma = require("../utils/prisma");

const getMovies = async (req, res) => {
  const movies = await prisma.movie.findMany({
    include: {
      screenings: true,
    },
  });

  res.json({ data: movies });
};

const createMovies = async (req, res) => {
  const movie = await prisma.movie.create({
    data: {
      title: req.body.title,
      runtimeMins: Number(req.body.runtimeMins),
    },
  });

  res.json({ data: movie });
};

const getMovieById = async (req, res) => {
  const movieId = Number(req.params.id);
  const movie = await prisma.movie.findUnique({
    where: {
      id: movieId,
    },
  });

  if (!movie) {
    return res
      .status(404)
      .json(`There is no any movie found with id: ${movieId}`);
  }

  res.json({ data: movie });
};

module.exports = {
  getMovies,
  createMovies,
  getMovieById,
};
