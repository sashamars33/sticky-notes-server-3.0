const express = require('express')
const router = express.Router()
const profileControllers = require('../controllers/profileController')
const { protect } = require('../middleware/authMiddleware')

 
router.get('/:id', profileControllers.getPages)
router.get('/note/:id', profileControllers.getNotes)
router.post('/create-page', profileControllers.createPage)
router.post('/create-note', profileControllers.createNote)
router.delete('/:id/delete-page', profileControllers.deletePage)
router.delete('/:id/delete-note', profileControllers.deleteNote)
router.put('/:id/checked', profileControllers.checkedTask)
router.put('/:id/select', profileControllers.selectPage)
router.put('/:id/deselect', profileControllers.deselectPage)

module.exports = router