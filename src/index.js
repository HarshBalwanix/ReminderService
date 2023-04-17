const express=require("express");
const bodyParser=require("body-parser");
const app =express();
const {PORT}=require('./config/serverConfig')
const setupAndStartServer=()=>
{

app.use(bodyParser.json());
app.use(bodyParser,bodyParser.urlencoded({extended:true}));
 
app.listen(PORT,()=>
{
console.log(`Server started at port ${PORT}`);
});
}

setupAndStartServer();