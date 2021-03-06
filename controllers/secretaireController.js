const secretairetModel=require('../models/secretaireModel')
var bcrypt = require ('bcrypt')

module.exports={
//fonctionne
    ajouter : function (req,res) {

              secretairetModel.findOne({login:req.body.login},function(err,reslt){
                if(err){res.json({state: 'non', msg: 'vous avez un erreur ' + err})}
                else{
                    if(reslt==null)
                   {
                   const secretaire=new secretairetModel({
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    login:req.body.login,
                    password: req.body.password,
                    dateNaissance:req.body.dateNaissance,
                    adresse:req.body.adresse,
                    telephone:req.body.telephone,
                    cin:req.body.cin,
                    email: req.body.email,
                    idmed:req.body.idmed
                   })
                secretaire.save(function (err) {
                  if (err) {
                    res.json({state: 'no', msg: 'vous avez un erreur ' + err})
                  }
                  else {
                    res.json({state: 'ok', msg: 'secrétaire ajouté avec succées'})
                  }
      
                })
                }
                else{ res.json({state:'no',msg:'non dutulisateur déja utulisé'})}
            }})
            
                
            },
     
    //fonctionne

    afficher:function(req,res){
        secretairetModel.find({},function(err,liste){
            if(err){res.json({state:'no', message:'erreur : '+err})}
            else{res.json(liste)}
          })
        },
    modifier:function(req,res){
      if(req.body.password!=null){ 
        var password = req.body.password
        req.body.password = bcrypt.hashSync(password,10)
            }
       console.log(req.body.login)
 secretairetModel.findOne({login:req.body.login},function(err,rslt){
 if(rslt!=null &&(rslt._id!=req.params.id)) {res.json({state:'no',msg:'non dutulisateur déja utulisé'})}
 else{
   secretairetModel.updateOne({_id:req.params.id},{$set:req.body},{
  nom: req.body.nom,
  prenom: req.body.prenom,
  login:req.body.login,
  password: req.body.password,
  dateNaissance:req.body.dateNaissance,
  adresse:req.body.adresse,
  telephone:req.body.telephone,
  cin:req.body.cin,
  email: req.body.email,
  idmed:req.body.idmed
},function(err)
{
if(err)  {res.json({state:'non',message:'il ya un erreur : '+err})}
 else {res.json({state:'yes',message:'la modification terminé avec succées'}) }
 })}
 })
},
//fonctionne
  supprimer:function (req,res) {
    secretairetModel.deleteOne({_id:req.params.id},function (err) {
      if(err)
      {
        res.json({state: 'no', msg: 'secrétaire nest pas trouvé ! lerreur :' + err})
      }
      else {
        res.json({state: 'okk', msg: 'secrétaire supprimer avec succées' })

      }

    }
  )
},

 afficherParMedecin:function(req,res){
  secretairetModel.find({idmed:req.params.id},function(err,liste){
    if(err){res.json({state:'no', message:'erreur : '+err})}
    else{res.json(liste)}
  })
 },
// pour verifie r si le nom dutilisteur existe deja 
 checkUsername:function(req,res){
   secretairetModel.find({},function(err,reslt){
     if(err){res.json({state:'no',message:'erreur:'+err})}
     else{
      for (var i = 0; i < reslt.length; i++) {
       
          var list=reslt[i].login;
         
        
//pour les moments yatl3ouli les login lkol fl consol wfl rejson il prend que le premier element si je le met dans la boucle et le dernier element si je le met dehors !
      } console.log(list)
           res.send(list)
      }
     
   })

 },
 nombreSecretaire:function(req,res){
  secretairetModel.count({},function(err,nb){
    if(err){res.json({state:'no', message:'there is an error'})}
    else{res.json(nb)}
  })
}
}