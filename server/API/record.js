let db = require('../db/index')

exports.insert=(req,res)=>{
    var sql = 'insert into records (rNo, uid, uname, pNo, record_date, record_time, systime) values (?,?,?,?,?,?,?)'
    db.query(sql, [req.query.rNo, req.query.uid, req.query.uname, req.query.pNo, req.query.date, req.query.time, req.query.systime], (err, data)=>{
        if(err){
            return res.send({
                status: 400,
                message: "fail"
            })
        }
        else{
            res.send({
                status: 200,
                message: "success"
            })
        }
    })
}

exports.get=(req,res)=>{
    var sql = 'select * from records where uid = ?'
    db.query(sql, [req.query.uid], (err, data)=>{
        console.log(req.query.uid);
        if(err){
            return res.send({
                status: 400,
                message: "fail"
            })
        }
        if(data.length>0){
            res.json(data);
        }
    })
}

exports.getLastRNO=(req,res)=>{
    var sql = 'select * from carts where pNo = ?'
    db.query(sql, [req.query.pNo], (err, data)=>{
        //console.log(req.query.pNo);
        if(err){
            return res.send({
                status: 400,
                message: "fail"
            })
        }
        if(data.length>0){
            //console.log(data)
            res.json(data);
        }
    })
}

exports.updateLastRNO=(req,res)=>{
    var sql = 'update carts set rNo = ? where pNo = ?'
    db.query(sql, [req.query.rNo, req.query.pNo], (err, data)=>{
        //console.log(req.query.pNo);
        if(err){
            return res.send({
                status: 400,
                message: "fail"
            })
        }
        else{
            res.send({
                status: 200,
                message: "success"
            })
        }
    })
}