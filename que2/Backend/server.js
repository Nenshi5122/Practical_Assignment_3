const express = require("express");
const app = express();
const helmet = require("helmet");
const port = 9000;
const cors = require("cors");
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const category_route= require("./routers/Crouter");
const Product_route= require("./routers/router")
app.use(cors());
app.use(helmet());


app.use("/",category_route,Product_route)

app.listen(port,()=>{
    console.log(`listen on http://localhost:${port}`)
})
