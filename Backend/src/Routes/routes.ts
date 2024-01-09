import passport from "passport";

export default function (app: any) {
    app.post('/login', passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true,
    }));

    app.get('/', (req: any, res: any) => {
        res.send('Hello World!');
    });
    // app.get('/logout', (req, res) => {
    //     req.logout();
    //     res.redirect('/');
    // });
}

