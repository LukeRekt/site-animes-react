const User = require("../models/user")
const jwt = require("jsonwebtoken");
const user = require("../models/user");
require("dotenv").config();

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

exports.login = async (req, res) => {
    //buscar usuario baseado no email
    const {email, password} = req.body;

    await User.findOne({email}).exec((err,user) => {
        //se der erro ou nenhum usuario encontrado
        if(err || !user){
            return res.status(401).json({
                error: "Credenciais Invalidas",
            });
        }
        //se usuario foi encontrado, usar metodo de autencticacao do model
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: "Invalid email or password",
            });
        }
        // gerar token como id do usuario e um jwt secret
        const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        //persistir o token como "jwt" em um cookie com data de validade
        res.cookie("jwt" , token, {expire: new Date() + 9999, httpOnly: true });

        //retornar resposta para o usuario
        const {username} = user;
        return res.json({
            message: "Logado com sucesso!",
            username,
        });
    });
};

exports.logout = (req, res) => {
    res.clearCookie("jwt");

    return res.json({
        message: "Deslogado com sucesso!",
    });
};

exports.getLoggedInUser = (req, res) => {
    const {username} = req.user;

    return res.status(200).json({
        message: "O Usuario ainda esta logado",
        username,
    })
}