const reclamationController=require('../controllers/reclamationController')
const router=require('express').Router()
router.post('/ajouter',reclamationController.ajouter)
router.get('/afficher',reclamationController.afficher)
router.get('/reclamationParPatient/:id',reclamationController.reclamationParPatient)
router.get('/reclamationParMedecin/:id',reclamationController.afficherParMed)
router.get('/reclamationParId/:id',reclamationController.reclamationParId)

module.exports=router;