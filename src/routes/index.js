const  express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    return res.render('index', {title:'Miniproyectos | Inicio'})
})
router.get('/projects' , (req, res) => {
    return res.render('projects', {title: 'Miniproyectos | Menu'})
})


module.exports = router