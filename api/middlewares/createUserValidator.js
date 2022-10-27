import joi from 'joi';

const createUserValidator = async (req, res, next) => {
  /**
   * 1.- crear schema ✅
   * 2.- validar req.body con el schema ✅
   *  si todo sale bien -> next()✅
   *  si no res.status(400)✅
   * 3.- registrar middleware
   */

  const userSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
  });

  try {
    await userSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Datos incorrectos',
      error,
    });
  }
};

export { createUserValidator };
