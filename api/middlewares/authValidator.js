import jwt from 'jwt-simple';
import config from '../config/index.js';
import User from '../models/User.js';

const authValidator = async (req, res, next) => {
  /**
   * 1.- Verificar que el request tenga token [headers] ✅
   *        Si no hay token status 403 ->  falta authorization
   * 2.- Validar que el token sea verídico ✅
   *        regresamos un 403
   * 3.- Exista la propiedad userId && exista un usuario en la db con ese id
   *        regresamos 403
   * 4.- next()
   *
   */

  //obtenemos el header authorization y lo renombramos a token
  const { authorization: token } = req.headers;

  //Si token es null
  if (!token) {
    return res.status(403).json({
      msg: 'Falta cabecera Authorization',
    });
  }

  try {
    //Verificamos que el token se pueda decodificar con la llave que tenemos
    const payload = jwt.decode(token, config.jwtSecret);

    //Si el token era válido tratamos de extraer una propiedad userId dentro del payload resultante
    const { userId } = payload;

    //Si no existe un userId dentro del payload, es token inválido
    if (!userId) {
      return res.status(403).json({
        msg: 'Token inválido',
      });
    }

    //Si existe un userId  dentro del payload buscar usuario en la BD
    const user = await User.findById(userId);

    //Si no hay usuario en la BD
    if (!user) {
      return res.status(403).json({
        msg: 'Token inválido',
      });
    }

    //Si todo sale bien, salimos del middleware al siguiente en cadena
    next();
  } catch (error) {
    //Acá falla cuando el token no se pudo decodificar con la llave que teníamos o era un token inválido
    return res.status(403).json({
      msg: 'Token inválido',
    });
  }
};

export { authValidator };
