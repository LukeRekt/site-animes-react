const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    let accessToken = req.cookies.jwt;
    //se nao tiver token nos cookies, a request eh negada

    if (!accessToken) {
        return res.status(403).json({
            error: "Nao Logado",
        });
    }
    let payload;
    try {
        //verificar o token usando o jwt.vertify
        //throw erro caso o token tenha uma assinatura invalida ou expirou
        payload = jwt.verify(accessToken, process.env.JWT_SECRET);
        req._id = payload._id;
        next();
    } catch (e) {
        return res.status(403).json({
            error: "Nao Logado",
        })
    }
}