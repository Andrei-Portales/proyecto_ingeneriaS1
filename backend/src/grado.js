const insertTema = async (req, res, next, pool) => {
  const { id_grado, title, body, video_url } = req.body;

  if (
    id_grado === undefined ||
    title === undefined ||
    body === undefined ||
    video_url === undefined
  )
    return res.send({ result: false });

  try {
    await pool.query(
      'insert into tema (id_grado, title, body, video_url) values ($1, $2, $3, $4)',
      [id_grado, title, body, video_url]
    );
    return res.send({ result: true });
  } catch (e) {
    console.log(e);
    return res.send({ result: false });
  }
};

const getTemas = async (req, res, next, pool) => {
  const { id_grado } = req.body;

  if (id_grado === undefined) return res.send({ result: false });

  const result = await pool.query('select * from tema where id_grado = $1', [`${id_grado}`]);

  return res.send({result:true, data: result.rows});
};

module.exports = {
  insertTema,
  getTemas,
};
