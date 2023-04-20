const express=require("express");
const bodyParser=require("body-parser");
const app =express();
const {PORT}=require('./config/serverConfig');
const {createChannel}=require('./utils/messageQueue')
// const {sendBasicEmail}=require('./services/email-service')
const jobs=require('../src/utils/job');
const setupAndStartServer=async ()=>
{

app.use(bodyParser.json());
app.use(bodyParser,bodyParser.urlencoded({extended:true}));
 
const channel=await  createChannel();

app.listen(PORT,()=>
{
console.log(`Server started at port ${PORT}`);
jobs();
// sendBasicEmail(
//     'support@gmail.com',
//     'balwaniharsh1001@gmail.com',
//     'This is a testing mail',
//     'Hey,Just checking it is working fine or not'

// )
// cron.schedule('',()=>{
//     console.log("");
// });
});
}

setupAndStartServer();