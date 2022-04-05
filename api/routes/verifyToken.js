 const jwt = require('jsonwebtoken');

 const verifyToken = (req, res, next) => {
     console.log(req.headers);

    const authHeader = req.headers.token;
    console.log(authHeader);

    if(authHeader){
        const token = authHeader.split(" ")[1]; 
        jwt.verify(token, process.env.JWT_SEC_KEY, (err, user)=> {
            if(err) res.status(401).json("Token is not valid!");
            req.user = user;
            next();

        })

    } else {
        res.status(401).json("You're not authenticated!");
    }
 };


 const verfityTokenAndAuthorization = (req, res, next) => {
     verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");

        }
     });
 }

 const verfityTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
       if(req.user.isAdmin){
           next();
       } else {
           res.status(403).json("You are not allowed to do that!");

       }
    });
}

 module.exports = {verifyToken, verfityTokenAndAuthorization, verfityTokenAndAdmin};
