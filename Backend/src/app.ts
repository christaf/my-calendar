import {app, ServerStart} from './Server/index'

ServerStart().then(
    () => console.log("Server started")
);
