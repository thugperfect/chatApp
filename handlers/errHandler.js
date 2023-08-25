exports.catchError = (prop) =>{
    return function (err,req,res,next) {
        if(typeof(err) === String){
            res.status(400).json({
                msg:err
            })
        }
    }
}

exports.errProduced = (err,req,res,next) =>{
    res.status(err.status || 500)
    .json({
        msg:"internal server Error"
    })
}

exports.notFound = (req,res,next) =>{
    res.status(404).json({
        msg:"Module not found"
    })
}