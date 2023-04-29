const express=require("express");
const bodyParser=require("body-parser");
const app =express();
const {PORT}=require('./config/serverConfig');

const jobs=require('../src/utils/job');
const {susbscribeMessage,createChannel}= require('./utils/messageQueue');
const TicketController=require('./controllers/ticket-controller'); 
const {REMINDER_BINDING_KEY}=require('./config/serverConfig');
const EmailService=require('./services/email-service');
const setupAndStartServer=async ()=>
{
const app =express();
app.use(bodyParser.json());
app.use(bodyParser,bodyParser.urlencoded({extended:true}));
 
app.post('api/v1/tickets',TicketController.create);

const channel=await createChannel();
susbscribeMessage(channel,EmailService.subscribeEvents,REMINDER_BINDING_KEY);

app.listen(PORT,()=>
{
console.log(`Server started at port ${PORT}`);
jobs();
});
}

setupAndStartServer();