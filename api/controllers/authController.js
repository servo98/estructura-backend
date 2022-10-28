import bcrypt from 'bcrypt';
import User from '../models/User.js';

const register = async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);

    req.body.password = hashed;

    const user = await User.create(req.body);

    user.password = undefined;

    return res.json({
      msg: 'Usuario creado exitosamente',
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al registrar usuario, intente más tarde',
      error,
    });
  }
};

export { register };
