module.exports ={
    ensureAuthenenticated : function(req,res,next) {
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg','Please log in to view this resourse');
        res.redirect('/user/login')
    }
    }