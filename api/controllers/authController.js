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

//email y password  -----> TOKEN
const login = async (req, res) => {
  /**
   * 1.- verificar que venga email y password ✅
   * 2.- Buscar en base de datos si existe ese usuario con ese email ✅
   *    Si no existe -> 401
   * 3.- Verificamos que el password sea correcto bcrypt.compare ✅
   *    Si no es correcta la contraseña -> 403
   * 4.- Crear token y mandarlo
   */

  /**
   * A      codificar  B
   * payload  -> 🔑   token
   * 97291u2bd12    -> 18273u912easkdujhaskjd
   * token    -> 🔑   payload
   */

  const { body } = req;
  if (!body.password || !body.email) {
    return res.status(400).json({
      msg: 'Ingresa correo y contraseña',
    });
  }
  try {
    const user = await User.findOne({
      email: body.email,
    });

    if (!user) {
      return res.status(403).json({
        msg: 'Credenciales inválidas',
      });
    }

    const isValid = await bcrypt.compare(body.password, user.password);

    if (!isValid) {
      return res.status(403).json({
        msg: 'Credenciales inválidas',
      });
    }
  } catch (error) {}
};

export { register, login };
