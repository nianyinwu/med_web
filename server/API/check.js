let db=require('../db/index')

exports.shift=(req, res) => {
    var sql = 'select * from records where record_Date between ? and ? '
    db.query(sql, [req.query.begin_Date, req.query.fin_Date], (err, data) => {
        console.log(req.query.record_Date);
        console.log(data);
        // console.log('number: '+ data[0].pNo);
        if(err){
            return res.send({
                status: 400,
                message: "fail"
            })
        }
        if(data.length>0){
            return res.send({
                status: 200,
                message: "success"
            })
        }else{
            res.send({
                status:202,
                message: "record date or time is wrong"
            })
        }
        
    })
}

exports.get=(req, res) => {
    var sql = 'select * from records where record_Date between ? and ? order by record_Date desc, systime desc'
    db.query(sql, [req.query.begin_Date, req.query.fin_Date], (err, data) => {
        console.log(req.query.record_Date);
        console.log(data);
        // console.log('number: '+ data[0].pNo);
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

exports.psn=(req, res) => {
    var sql = 'select * from records where record_Date between ? and ?'
    db.query(sql, [req.query.begin_Date, req.query.fin_Date], (err, data) => {
    // var sql = 'select * from records where record_Date >= ?'
    // db.query(sql, [req.query.begin_Date], (err, data) => {
        console.log(req.query.record_Date);
        console.log(data);
        if(err){
            return res.send({
                status: 400,
                message: "fail"
            })
        }
        if(data.length>0){
            return res.send({
                status: 200,
                message: "success"
            })
        }else{
            res.send({
                status:202,
                message: "record date is wrong"
            })
        }
        
    })
}

exports.getp=(req, res) => {
    var sql = 'select * from records where uid = ? and record_Date between ? and ?'
    db.query(sql, [req.query.uid, req.query.begin_Date, req.query.fin_Date], (err, data) => {
        // var sql = 'select * from records where uid = ? and record_Date >= ?'
        // db.query(sql, [req.query.uid, req.query.begin_Date], (err, data) => {
        console.log(req.query.record_Date);
        console.log(data);
        // console.log('number: '+ data[0].pNo);
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
