const prisma = require("../utils/prisma");

const filters = {
  greaterThan: "gt",
  lessThan: "lt",
};

const getMovies = async (req, res) => {
  const { runtimeMins, comparison } = req.query;
  const whereData = {};

  if (runtimeMins && comparison) {
    const filter = {};
    const operator = filters[comparison];
    filter[operator] = Number(runtimeMins);
    whereData.runtimeMins = filter;
  }

  const movies = await prisma.movie.findMany({
    where: whereData,
    include: {
      screenings: true,
    },
  });

  res.json({ data: movies });
};

const createMovies = async (req, res) => {
  const { screenings } = req.body;

  const movieData = {
    title: req.body.title,
    runtimeMins: Number(req.body.runtimeMins),
  };

  if (screenings) {
    movieData.screenings = { create: screenings };
  }

  const movie = await prisma.movie.create({
    data: movieData,
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
