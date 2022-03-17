const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const db = require('./app/models/db')
const errorHandler = require("./app/middleware/errorHandler")
db.sequelize.sync();

const app = express();

app.use(fileUpload({
    createParentPath: true
}));
const corsOptions = {
    // origin: "http://localhost:3000"
    origin: "https://rescue-admin.herokuapp.com"
};

app.use(cors());
// app.use(cors());
app.use(morgan("tiny"));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req,res,next)=>{
    res.header(
        "Access-Control-Expose-Headers",
        "x-access-token, Origin, Content-Type, Accept,Content-Range",
    );
    res.header('Content-Range','users 0-20/50')
    next();
})

app.use("/uploads",express.static('uploads'));
app.use("/api/users",require('./app/routes/user.routes'));
app.use("/api/admin",require('./app/routes/admin.routes'));
app.use("/api/auth",require('./app/routes/auth.routes'));
app.use("/api/files",require('./app/routes/file.routes'));
app.use("/api/repairShop",require('./app/routes/shop.routes'));
app.use("/api/rescue",require('./app/routes/rescue.routes'));
app.use("/api/services",require('./app/routes/service.routes'));
app.use("/api/categories",require('./app/routes/category.routes'));


app.use("/api/test",require('./app/routes/test.route'))
app.use(errorHandler)

app.listen(5000,'0.0.0.0', () =>{
    console.log('server is running... ')
})
