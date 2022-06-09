const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

app.disable("x-powered-by");

// ADD MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// REQUIRE ROUTERS
const customerRouter = require("./routers/customer");
const movieRouter = require("./routers/movies");
const screensRouter = require("./routers/screens");
const ticketRouter = require("./routers/ticket");

// ADD ROUTERS TO APP
app.use("/customer", customerRouter);
app.use("/movies", movieRouter);
app.use("/screens", screensRouter);
app.use("/ticket", ticketRouter);

module.exports = app;
