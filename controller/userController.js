const User = require("../models/User");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware");

module.exports.renderSignUpForm = (req, res) => {
    res.render("./users/signup.ejs");
}
module.exports.signUp = async (req, res, next) => {
    try {
        let { username, password, email } = req.body;
        let newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);

        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect('/listings/');
        });

    } catch (err) {
        req.flash("failure", `${err.message}`);
        res.redirect(`/signup`);
    }
}
module.exports.renderLoginForm = (req, res) => {
    res.render("./users/login.ejs");
}
exports.logIn =    (req, res, next) => {
        passport.authenticate("local", (err, user, info) => {
            if (err) return next(err);
            if (!user) {
                req.flash("failure", "Invalid username or password!");
                return res.redirect("/login");
            }
            req.logIn(user, (err) => {
                if (err) return next(err);
                req.flash("success", "Welcome back to Wanderlust!");
                let redirectUrl = res.locals.redirectUrl || "/listings";
                return res.redirect(redirectUrl);
            });
        })(req, res, next);  //  This ensures `passport.authenticate` runs correctly
    }

module.exports.logOut = (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "You're Logged out!");
        res.redirect("/listings");
    });
}