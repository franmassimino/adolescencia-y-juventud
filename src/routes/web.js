const express = require('express')
const app = express.Router()
const mainController = require('../controllers/mainController.js')
const postsController = require('../controllers/postsController.js')


app.get('/', mainController.index)

app.get('/posts', mainController.posts)

app.get('/about', mainController.about)

app.get('/contacto', mainController.contacto)

//posts
app.get('/posts/recursos-tecnicos', postsController.recursosTecnicos)
app.get('/posts/necesidad-y-futuro-de-trabajo', postsController.necesidadTrabajo)
app.get('/posts/maternidades-y-paternidades', postsController.meternidadesYPaternidades)
app.get('/posts/promoviendo-el-cuidado-de-la-salud-sexual', postsController.promoviendoCuidado)
app.get('/posts/conociendo-diferentes-miradas', postsController.conociendoMiradas)
app.get('/posts/aportando-experiencias-innovadoras', postsController.aportandoExperiencias)
app.get('/posts/valores-y-seguridad', postsController.valoresYSeguridad)
app.get('/posts/casa-de-la-juventud', postsController.casaJuventud)
app.get('/posts/una-mirada-al-futuro', postsController.miradaAlFuturo)
app.get('/posts/atencion-primaria-de-la-salud', postsController.atencionPrimaria)
app.get('/posts/desarrollo-de-adolescentes-en-zonas-marginales', postsController.desarrolloAdolescente)
app.get('/posts/el-rol-del-pediatra', postsController.rolDelPediatra)
app.get('/posts/escenarios-politicos-economicos-y-sociales', postsController.diferentesEscenarios)
app.get('/posts/adolescencia-el-segmento-ignorado', postsController.segmentoIgnorado)
app.get('/posts/estilos-de-vida', postsController.estilosDeVida)
app.get('/posts/violencia-escolar', postsController.violenciaEscolar)
app.get('/posts/violencia-intrafamiliar', postsController.violenciaIntrafamiliar)
app.get('/posts/formando-hijos-responsables', postsController.formandoHijos)
app.get('/posts/abuso-de-sustancias', postsController.abusoSustancias)
app.get('/posts/salud-integral-de-los-jovenes', postsController.saludIntegral)




module.exports = app