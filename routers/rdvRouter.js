const rdvController=require('../controllers/rdvController')
const router=require('express').Router()


router.post('/ajouter',rdvController.ajouter)
router.get('/afficher',rdvController.afficher)
router.get('/rdvParMed/:id',rdvController.rdvParMed)
router.get('/afficheComplet',rdvController.afficheComplet)
router.get('/afficheCompletParMed/:id',rdvController.afficheCompletParMed)
router.get('/afficheRdvAttente/:id',rdvController.afficheRDVAttente)
router.delete('/supprimer/:id',rdvController.supprimerRdv)



module.exports=router;