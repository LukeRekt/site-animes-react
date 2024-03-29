const User = require("../models/user")
const jwt = require("jsonwebtoken");
const user = require("../models/user");
const fs = require('fs');
const { nextTick } = require("process");
require("dotenv").config();

exports.register = async (req, res) => {
    //testar se o user ja existe
	
    const usernameExists = await User.findOne({
        username: req.body.username,
    });
    const emailExists = await User.findOne({
        email: req.body.email,
    });
    if (usernameExists) {
        return res.status(403).json({
            error: "Usuário já existe",
        });
    }
    if (emailExists) {
        return res.status(403).json({
            error: "Email já existe",
        });
    }

    //se novo user, criar novo user
    const user = new User(req.body);
    await user.save();

    fs.copyFile('./public/imagens/avatars/default.png', `./public/imagens/avatars/${req.body.username}.png`, (err) => {
        if (err) throw err;
      });
      console.log("Usuário " + req.body.username + " Cadastrado com sucesso!")
    res.status(201).json({
        message: "Cadastrado com sucesso!",
    });
};

exports.login = async (req, res) => {
    //buscar usuario baseado no email
    const { email, password } = req.body;

    await User.findOne({ email }).exec((err, user) => {
        //se der erro ou nenhum usuario encontrado
        if (err || !user) {
            return res.status(401).json({
                error: "Credenciais Inválidas",
            });
        }
        //se usuario foi encontrado, usar metodo de autencticacao do model
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email ou senha inválidos",
            });
        }
        // gerar token como id do usuario e um jwt secret
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "24h"
        });

        //persistir o token como "jwt" em um cookie com data de validade
        res.cookie("jwt", token, { expire: new Date() + 9999, httpOnly: true });

        //retornar resposta para o usuario
        
        const { username } = user;
        const { userAvatar } = user;
        const { userBanner } = user;
        const { isAdmin } = user;
        const { email } = user;
        const { animesFavoritos } = user;
        console.log("Usuário " + username + " Logado com sucesso!")
        return res.json({
            message: "Logado com sucesso!",
            username,
            userAvatar,
            userBanner,
            isAdmin,
            email,
            animesFavoritos,
            token
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
    const { username } = req.user;
    const { userAvatar } = req.user;
    const { userBanner } = req.user;
    const { isAdmin } = req.user;
    const { email } = req.user;
    const {animesFavoritos} = req.user;
    return res.status(200).json({
        message: "O Usuario ainda esta logado",
        username,
        userAvatar,
        userBanner,
        isAdmin,
        email,
        animesFavoritos
        
    })
    
}

// exports.Teste = async (req, res) => {
//     console.log(req.body)
//     const { username } = req.user;
//     console.log(req.user)
//     const buscarUser = await User.findOne({
//         username: username,
//     });
//     buscarUser.userAvatar = `http://localhost:3232/static/imagens/avatars/LukeRekt.png`
//     buscarUser.save();


//   };
    

    // const {username} = req.user;
    // return res.status(200).json({
    //     username,
    // })
    //a veracidade dos dados deve ser checada e buscada na db

exports.buscarUser = async (req, res) => {
    //buscar usuario baseado no email
    const { username } = req.body;

    await User.findOne({ username }).exec((err, usuario) => {
        //se der erro ou nenhum usuario encontrado
        if (err || !usuario) {
            return res.status(401).json({
                error: "Credenciais Invalidas",
            });
        }
        //retornar resposta para o usuario
        const { username } = usuario;
        const { userAvatar } = usuario;
        const { userBanner } = usuario;
        console.log(userAvatar)
        return res.json({
            message: "Usuário encontrado!",
            username,
            userAvatar,
            userBanner
        });
    });
};

exports.trocarAvatar = async (req, res) => {
    const { username } = req.user;
    const filename = req.files.screenshot.name;
    const file = req.files.screenshot;
    let uploadPath = __dirname + "../../public/imagens/avatars/" + filename;
    file.mv(uploadPath);
    const filter = {username: username}
    const update = { userAvatar: `static/imagens/avatars/${filename}`};
    
    const doc = await User.findOneAndUpdate(filter, update, {
    //   returnOriginal: false,
    //   new: true, 
    //   upsert: true
    });
    console.log(username)
    res.status(200).json({ novoAvatar: doc.userAvatar })
    // 
    // 
    // 
    // 
    
};

exports.setTeste = async (req, res) => {

    const { username } = req.user;
    const filename = req.files.screenshot.name;
    const file = req.files.screenshot;
    let uploadPath = __dirname + "../../public/imagens/assets/capasanimes/" + filename;
    file.mv(uploadPath);

    const filter = {username: username}
    const update = { userAvatar: `static/imagens/avatars/${filename}`};
    
    const doc = await A.findOneAndUpdate(filter, update, {
       returnOriginal: false,
       new: true, 
       upsert: true
    });
    console.log(username)
    res.status(200).json({ novoAvatar: doc.userAvatar })

    console.log(req.body);
    if(req.files == null){
        return res.status(200);    
    }
    console.log(req.files);

}