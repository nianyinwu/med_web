let db = require('../db/index')

exports.login=(req,res)=>{
    var sql = 'select * from user where uid = ? and password = ?'
    db.query(sql, [req.query.uid, req.query.password], (err, data)=>{
        if(err){
            return res.send({
                status: 400,
                message: "fail"
            })
        }
        if(data.length>0){
            res.send({
                status: 200,
                message: "success"
            })
        }else{
            res.send({
                status:202,
                message: "user id or password is wrong"
            })
        }
    })
}


// exports.register = (req, res) => {
//     const sql1 = 'select * from user where uid = ?'
//     const sql2 = 'insert into user (uid, password) value (?, ?)'
//     db.query(sql1, [req.body.params.uid], (err, data) => {
//       if(err) {
//         return res.send({
//           status: 400,
//           message: "操作失败"
//         })
//       }
//       if(data.length > 0) {
//         return res.send({
//           status: 202,
//           message: '用户名已存在'
//         })
//       }else{
//         // return res.send({
//         //   status: 200,
//         //   message: '注册成功'
//         // })
//         db.query(sql2, [req.body.params.uid, req.body.params.password], (err, data) => {
//           if(err) {
//               return res.send({
//                 status: 400,
//                 message: "注册失败"
//               })
//           }
//           res.send({
//             status: 200,
//             message: "注册成功"
//           })
//         })
//       }
//     })
//   }