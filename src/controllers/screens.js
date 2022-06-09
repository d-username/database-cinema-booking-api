const prisma = require("../utils/prisma");

const createScreen = async (req, res) => {
  const screen = await prisma.screen.create({
    data: {
      number: req.body.number,
    },
  });

  res.json({ data: screen });
};

module.exports = {
  createScreen,
};
