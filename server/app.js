require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router=require("./routers/router")

const port = 8004;

app.use(express.json());
app.use(cors());
app.use(router)

app.listen(port,()=>{
    console.log(`server start at port no :${port}`)
})