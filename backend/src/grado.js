const pdf = require('html-pdf');
const path = require('path');

const addTema = async (req, res, pool) => {
  try {
    const { subject, grade, title, body, video_url } = req.body;

    if (!subject || !grade || !title || !body || !video_url) {
      return res.json({ result: false });
    }

    const result = await pool.query(
      `
      insert into tema (subject, grade, title, body, video_url) values ($1, $2, $3, $4, $5);
    `,
      [subject, grade, title, body, video_url]
    );

    return res.json({ result: result.rowCount === 1 });
  } catch (e) {
    console.log(e);
    return res.json({ result: false });
  }
};

const getTemas = async (req, res, pool) => {
  try {
    const { subject, grade } = req.body;

    if (!subject || !grade) {
      return res.json({ result: false });
    }

    const result = await pool.query(
      `
        select id, title from tema where subject = $1 and grade = $2;
      `,
      [subject, grade]
    );

    return res.json({ result: true, temas: result.rows });
  } catch (e) {
    console.log(e);
    return res.json({ result: false });
  }
};

const getTema = async (req, res, pool) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.json({ result: false });
    }

    const result = await pool.query(
      `
      select * from tema where id = $1 limit 1;
    `,
      [id]
    );

    if (result.rowCount > 0) {
      return res.json({ result: true, tema: result.rows[0] });
    }

    return res.json({ result: false });
  } catch (e) {
    console.log(e);
    return res.json({ result: false });
  }
};

const getTemaPdf = async (req, res, pool) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.json({ result: false });
    }

    const result = await pool.query(
      `
      select * from tema where id = $1 limit 1;
    `,
      [id]
    );

    if (result.rowCount > 0) {
      const contenido = `
      <br/> 
      <br/> 
      <h1>${result.rows[0].title}</h1>
      <br/>
      <br/>
      <div>
        ${result.rows[0].body}
      </div>
      `;

      pdf
        .create(contenido)
        .toFile(__dirname + `/pdfs/${id}.pdf`, function (err, resPdf) {
          if (err) {
            return res.send('<p>No Content found</p>');
          } else {
            return res.sendFile(path.join(__dirname, 'pdfs', `${id}.pdf`));
          }
        });
    } else {
      return res.send('<p>No Content found</p>');
    }
  } catch (e) {
    console.log(e);
    return res.send('<p>No Content found</p>');
  }
};

module.exports = {
  addTema,
  getTemas,
  getTema,
  getTemaPdf,
};
