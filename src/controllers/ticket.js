const prisma = require("../utils/prisma");

const createTicket = async (req, res) => {
  const ticket = await prisma.ticket.create({
    data: {
      customerId: req.body.customerId,
      screeningId: req.body.screeningId,
    },
  });

  res.json({ data: ticket });
};

module.exports = {
  createTicket,
};
