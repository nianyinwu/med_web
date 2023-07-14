let db = require('../db/index')

exports.getMedNum=(req,res)=>{
    var sql = 'select * from items where pNo = ? and layer = ? and rNo = ?'
    db.query(sql, [req.query.pNo, req.query.layer, req.query.rNo], (err, data)=>{
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

exports.getAllNum=(req,res)=>{
    var sql = 'select * from (items A, carts B) where (A.pNo = ?) and (A.rNo = B.rNo) and (A.pNo = B.pNo)'
    db.query(sql, [req.query.pNo], (err, data)=>{
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

exports.getAllExactNum=(req,res)=>{
    var sql = 'select * from ExactQuantity where pNo = ?'
    db.query(sql, [req.query.pNo], (err, data)=>{
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

exports.getExactNum=(req,res)=>{
    var sql = 'select * from ExactQuantity where pNo = ? and layer = ?'
    db.query(sql, [req.query.pNo, req.query.layer], (err, data)=>{
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

exports.getRecordMed=(req,res)=>{
    var sql = 'select * from items  where pNo = ? and rNo = ? order by layer asc'
    db.query(sql, [req.query.pNo, req.query.rNo], (err, data)=>{
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

exports.updateMedNum=(req,res)=>{
    var sql = 'insert into items (rNo,pNo,itemName,quantity,layer,remark) values (?,?,?,?,?,?)'
    db.query(sql, [req.query.rNo, req.query.pNo, req.query.itemName, req.query.quantity, req.query.layer, req.query.remark], (err, data)=>{
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