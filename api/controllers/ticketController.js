import Ticket from '../models/Ticket.js';

const create = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    return res.json({ msg: 'Ticket creado', ticket });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear ticket',
      error,
    });
  }
};

const read = async (req, res) => {};
const readById = async (req, res) => {};
const update = async (req, res) => {};
const remove = async (req, res) => {};

export { create, read, readById, update, remove };
