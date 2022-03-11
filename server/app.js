//LukeRektero-R6O3sno7yHBldteV
const express = require('express');
const {json, urlencoded} = express;
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

const app = express();


//db

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB CONECTADA")).catch(err => console.log("Erro ao conectar a db", err));
//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(json());
app.use(urlencoded({ extended: true}));
app.use(cookieParser());
app.use(expressValidator());

//rotas
const userRoutes = require('./routes/user');
//const testRoute = require('./routes/test');
app.use("/", userRoutes)
//porta
const port = process.env.PORT || 8080;


const server = app.listen(port, () => console.log(`Server rodando na porta ${port}`))