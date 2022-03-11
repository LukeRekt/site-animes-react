const User = require("../models/user")

exports.register = async (req, res) => {
    //testar se o user ja existe
    const usernameExists = await User.findOne({
        username: req.body.username,
    });
    const emailExists = await User.findOne({
        email: req.body.email,
    });
    if(usernameExists){
        return res.status(403).json({
            error: "Usuario ja existe",
        });
    }
    if(emailExists){
        return res.status(403).json({
            error: "Email ja existe",
        });
    }

    //se novo user, criar novo user
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
        message: "Cadastrado com sucesso!",
    });
};