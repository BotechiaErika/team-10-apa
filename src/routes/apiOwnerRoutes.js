const apiOwnerControllers = require('../controllers/apiOwnerControllers.js')
const express = require('express')
const router = express.Router()
router.get('/', apiOwnerControllers.dashAPA)
router.get('/sociosApa', apiOwnerControllers.list)
router.get('/locales', apiOwnerControllers.listLocals)
router.get('/newEnterprise', apiOwnerControllers.createLocal)
router.post('/newEnterprise', apiOwnerControllers.storeLocal)
module.exports = router