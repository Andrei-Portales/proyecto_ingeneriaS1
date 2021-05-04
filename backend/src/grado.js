const insertTema = async (req, res, next, pool) => {
  const { id_materia, title, body, video_url } = req.body;

  if (
    title === undefined ||
    body === undefined ||
    video_url === undefined ||
    id_materia === undefined
  )
    return res.send({ result: false });

  try {
    await pool.query(
      'insert into tema (id_materia, title, body, video_url) values ($1, $2, $3, $4)',
      [id_materia, title, body, video_url]
    );
    return res.send({ result: true });
  } catch (e) {
    console.log(e);
    return res.send({ result: false });
  }
};

const getGrados = async (req, res, next, pool) => {
  try {
    const result = await pool.query('select * from grado order by id asc');
    return res.send({ result: true, data: result.rows });
  } catch (e) {
    console.log(e);
    return res.send({ result: false });
  }
};

const materiasGrado = async (req, res, next, pool) => {
  const { grado } = req.body;

  if (grado === undefined) return res.send({ result: false });

  try {
    const gradoData = await pool.query(
      `select name from grado where id = $1 limit 1`,
      [grado]
    );

    if (gradoData.rowCount !== 1) return res.send({ result: false });

    const result = await pool.query(
      `select * from materia where id_grado = $1`,
      [grado]
    );

    return res.send({
      result: true,
      data: result.rows,
      grado: gradoData.rows[0],
    });
  } catch (e) {
    console.log(e);
    return res.send({ result: false });
  }
};

const getTemas = async (req, res, next, pool) => {
  const { id_materia } = req.body;

  if (id_materia === undefined) return res.send({ result: false });

  try {
    const materiaData = await pool.query(
      `select name, image, description from materia where id = $1 limit 1`,
      [id_materia]
    );

    if (materiaData.rowCount !== 1) return res.send({ result: false });

    const result = await pool.query(
      'select id, id_materia, title from tema where id_materia = $1',
      [id_materia]
    );

    return res.send({
      result: true,
      data: result.rows,
      materia: materiaData.rows[0],
    });
  } catch (e) {
    console.log(e);
    return res.send({ result: false });
  }
};

const getTema = async (req, res, next, pool) => {
  const { id } = req.body;

  if (id === undefined) return res.send({ result: false });

  try {
    const result = await pool.query(
      'select * from tema where id = $1 limit 1',
      [id]
    );

    if (result.rowCount !== 1) return res.send({ result: false });

    return res.send({ result: true, data: result.rows[0] });
  } catch (e) {
    console.log(e);
    return res.send({ result: false });
  }
};

module.exports = {
  insertTema,
  getTemas,
  getGrados,
  materiasGrado,
  getTema,
};
