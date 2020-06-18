const rdvController=require('../controllers/rdvController')
const router=require('express').Router()


router.post('/ajouter',rdvController.ajouter)
router.get('/afficher',rdvController.afficher)
router.get('/rdvParMed/:id',rdvController.rdvParMed)
router.get('/afficheComplet',rdvController.afficheComplet)
router.get('/afficheCompletParMed/:id',rdvController.afficheCompletParMed)
router.get('/afficheRdvAttente/:id',rdvController.afficheRDVAttenteParMed)
router.get('/afficheRDVconfirme/:id',rdvController.afficheRDVconfirme)
router.delete('/supprimer/:id',rdvController.supprimerRdv)
router.get('/accepterRdv/:id',rdvController.accepterRdv)
router.put('/reporterRdv/:id',rdvController.reporterRdv)
router.post('/rdvConfirmerParPatient',rdvController.rdvConfirmerParPatient)
router.post('/rdvAttenteParPatient',rdvController.rdvAttenteParPatient)

module.exports=router;