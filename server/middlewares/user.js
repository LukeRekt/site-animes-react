exports.userRegisterValidator = (req, res, next) => {

    //usuario nao eh null
    req.check("username", "Usuario e obrigatorio").notEmpty();

    req.check("email", "Email eh necessario").notEmpty();
    req.check("email", "Email Invalido").isEmail();

    //check pass
    req.check("password", "Senha eh necessaria").notEmpty();
    req.check("password").isLength({min: 6})
    .withMessage("A senha deve conter ao menos 6 caracteres");

    req.check("password", "A senha deve conter pelo menos, uma letra maiuscula, uma letra minuscula, um numero e um caractere especial.").matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/, "i");

    //testar erros
    const errors = req.validationErrors();

    if(errors){
        const firstError = errors.map((err) => err.msg)[0];
        return res.status(400).json({
            error: firstError,
        });
    }
    next();

};