
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

const getTemas = async (req, res, pool) => {
    try{
      const {subject, grade} = req.body;

      if (!subject || !grade){
        return res.json({result: false});
      }
  
      const result = await pool.query(`
        select id, title from tema where subject = $1 and grade = $2;
      `, [subject, grade]);
  
  
      return res.json({result: true, temas: result.rows});
    }catch(e){
      console.log(e);
      return res.json({result: false});
    }
};

const getTema = async (req, res, pool) => {
  try{
    const {id} = req.body;

    if (!id){
      return res.json({result: false});
    }

    const result = await pool.query(`
      select * from tema where id = $1 limit 1;
    `, [id]);

    if (result.rowCount > 0){
      return res.json({result: true, tema: result.rows[0]});
    }
    
    return res.json({result: false});
  }catch(e){
    console.log(e);
    return res.json({result: false});
  }
};


module.exports = {
addTema,
getTemas,
getTema,
};
