let db=require('../db/index')

exports.get=(req, res) => {
    var sql = 'select * from user where uid = ?'
    db.query(sql, [req.query.uid], (err, data) => {
        console.log('user: '+ data[0].uname);
        if(err){
            return res.send('error: '+ err.message)
        }
        if(data.length>0){
            res.json(data);
        }
    })
}
