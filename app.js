if(process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}
const  express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs")
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate")
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const ExpressError = require("./utils/ExpressError.js");
app.engine('ejs',ejsMate)
const listingRoute = require("./Routes/listingRoute.js");
const reviewRoute = require("./Routes/reviewRoute.js");
const userRoute = require("./Routes/userRoute.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");



// Database Connection
const dbUrl = process.env.ATLASDB_URL;
async function main(){
    await mongoose.connect(dbUrl);
}
main()
.then(() => {
    console.log("connected to DB!")
})
.catch((err)=>{
  console.log(err);
})

app.set("view engine","ejs")
app.set("views",path.join(__dirname,'views'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,'public')));

const store  = MongoStore.create({
    mongoUrl : dbUrl,
    crypto:{
        secret:process.env.SECRET
    },
    touchAfter: 24*3600,
})
store.on("err",()=>{
    console.log("error in MONGO SESSION STORE",err);
})
const sessionOption = {
    store,
    secret :process.env.SECRET,
    resave : false,
    saveUninitialized: true,
    cookie: {
        expires : Date.now() + 7 * 24 *60 *60 * 1000,             // days(7),hours(24),minutes(60),seconds(60),milisecond(1000)
        maxAge :7 * 24 *60 *60 * 1000,
        httpOnly : true,
    }
}

// Default Route (Test)
// app.get("/",(req,res) =>{
//     // console.dir("hello : " +req.cookies);
//     res.send("Hi i'm root")
// })

app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.failure= req.flash("failure");
    res.locals.currentUser = req.user;
    next();
})
// Listing routes :
app.use("/listings",listingRoute)
// Review routes :
app.use("/listings/:id/reviews",reviewRoute)
const port = 8080;

// User Routes :
app.use("",userRoute);
// app.get("/demouser",async (req,res)=>{
//     let fUser  = new User({
//         email : "studdfdsent@gmail.com",
//         username:"deltssdfffudent",
//     })
//    const registredUser  = await  User.register(fUser,"helloWorld");          //(UserData,UserPassword)
//     res.send(registredUser);
// })

// Custom Error Handler
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found!"))
})
app.use((err,req,res,next)=>{
    // res.send("Something went wrong")
    let {statusCode = 500, message="Something went wrong!"} = err;
    res.status(statusCode).render("error.ejs",{err})
})
app.listen(port, () => {
    console.log("Server is listening on port " + port);
}
)