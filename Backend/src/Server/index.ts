import express from 'express'
import config from "config"
import configureRoutes from "../Routes/routes";
import passport from "passport";
import session from "express-session";
import {configurePassport} from "../Passport/configurePassport";
// import Connection from "../Database";

const app = express();
const port = config.get("APP.PORT");

async function ServerStart() {

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use(session({
        secret: config.get("APP.SESSION.SECRET"),
        resave: false,
        saveUninitialized: true
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    configureRoutes(app);
    configurePassport();

    // const Connect = Connection.getInstance()
    // Connect.selectDataFromDB({table: "users", columns: [], conditions: [], all: true, like: false}).then((data) => {
    //     console.log(data)
    // })


    app.listen(port, () => {
        return console.log(`Serwer uruchomiony na porcie ${port}`);
    });

}

export {app, ServerStart};