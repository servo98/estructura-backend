// req.body

// req.query

// req.params

// req.headers
import Item from '../models/Item.js';

const create = async (req, res) => {
  try {
    /**Poner a prueba funciones que puedan fallar */
    const item = await Item.create(req.body);
    return res.json({
      msg: 'Item creado satisfactoriamente',
      item,
    });
  } catch (error) {
    //Qué hacer con ese error
    return res.status(500).json({
      msg: 'Error al crear item',
      error,
    });
  }
};

const read = () => {};

const update = () => {};

const remove = () => {};

export { create, read, remove, update };
