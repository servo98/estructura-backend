import User from '../models/User.js';

const create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.json({ msg: 'Usuario creado', user });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear usuario',
      error,
    });
  }
};
const read = async (req, res) => {
  try {
    const users = await User.find(req.query);
    return res.json({
      msg: 'Usuarios encontrados',
      users,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar usuarios',
      error,
    });
  }
};
const readById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    return res.json({
      msg: 'Usuario encontrado',
      user,
    });
  } catch (error) {
    return res.json({
      msg: 'Error al buscar usuario por id',
      error,
    });
  }
};
const update = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: 'Usuario modificado',
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar usuario',
      error,
    });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id, req.body);
    return res.json({
      msg: 'User eliminado',
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al borrar user',
      error,
    });
  }
};

export { create, read, readById, update, remove };
