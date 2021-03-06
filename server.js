//**********************************importation des modules quon veut utilisé ***************************************************************/
const nodemailer = require("nodemailer");

const express= require('express')
const bodyParser=require('body-parser')//On utilise le module body-parser afin de récupérer les paramètres envoyés par les formulaire 

var morgan = require ('morgan') // morgan et cors necessite une installation npm i morgan cors
const cors = require('cors')
/************************************ importation de routers privées********************************************************************/
// require('dotenv/config')

//
// const sendMail=require('./models/mail')
const db=require('./db')

const medecin=require('./routers/medecinRouter')
const patient=require('./routers/patientRouter')
const secretaire=require('./routers/secretaireRouter')
const utilisateur=require('./routers/utilisateurRouter')
const specialite=require('./routers/specialiteRouter')
const message=require('./routers/messageRouter')
const consultation=require('./routers/consultationRouter')

const rdv=require('./routers/rdvRouter')
const app=express(); // app est une instance d'express
 app.use(bodyParser.urlencoded({extended:false}))
 app.use(bodyParser.json())
/************************************* utilisation de route importé  ************************************************************* */
app.set( 'secretKey', 'pfe') // this is for jwt ! error found if i remove it is  Error: secretOrPrivateKey must have a value
//el key mte3i pour json web token jwt est pfe kinmchi nchouf fl authentification nal9a req.app.get('secretKey')
app.use(morgan('dev'));//Morgan is a HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application
app.use(cors('*')) //Cors: it provides a middleware to handle cross-origin resource sharing


 app.use('/medecin',medecin)
 app.use('/patient',patient)
app.use('/secretaire',secretaire)
app.use('/utilisateur',utilisateur)
app.use('/specialite',specialite)
app.use('/rdv',rdv)
app.use('/message',message)
app.use('/consultation',consultation)

//****************************************************************** */
 app.post('/sendEmail',(req,res,cb)=>{
 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', 
  //  service:'gmail',
    // remarque: maynjm yeb3eth email en utulisant el email haka lazm nactivi lien hetha https://myaccount.google.com/lesssecureapps?pli=1
    auth: {
      user: 'findoc08@gmail.com',  
      pass: 'findoctor', 
    },
    tls:{
        rejectUnauthorized: false
    }
  });
//lene neb3thou les donné mte3 lemail ll trasporteur
  let info =  transporter.sendMail({
    from: '"FinDoc"<findoc08@gmail.com>', // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.text, // plain text body
    // html: "<b>Hello world?</b>", // html body
  },function(err,data){
      if(err){res.json({status:'no',message:'thers an error'+err})}
      else{res.json({status:'ok',message:data})}
  });
});
//****************************************************************** */
 
app.listen(3000,function(){
     console.log('******* Hello the server is runnig on port 3000 *******')
 })