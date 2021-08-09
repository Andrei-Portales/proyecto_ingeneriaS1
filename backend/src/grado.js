
const addTema = async (req, res, pool) => {
  try{

    const {subject, grade, title, body, video_url} = req.body;

    if (!subject || !grade || !title || !body || !video_url){
      return res.json({result: false});
    }

    const result = await pool.query(`
      insert into tema (subject, grade, title, body, video_url) values ($1, $2, $3, $4, $5);
    `, [subject, grade, title, body, video_url]);


    return res.json({result: result.rowCount === 1});

  }catch(e){
    console.log(e);
    return res.json({result: false});
  }
};


module.exports = {
addTema
};
