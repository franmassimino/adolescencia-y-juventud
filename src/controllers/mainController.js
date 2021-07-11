const posts = [
    {
        titulo: 'LA NECESIDAD Y EL FUTURO DEL TRABAJO',
        descripcion: 'Necesidad de capacitarse para el trabajo en las poblaciones que abandonan el sistema educativo',
        img: "/img/posts/necesidad-de-trabajo.jpg",
        url: "/posts/necesidad-y-futuro-de-trabajo",
        id: 1,
    },
    {
        titulo: 'Maternidades y paternidades',
        descripcion: 'Este programa se creó con el fin de poner un foco especial a la salud y embarazos en adolescentes menores de 15 años y sus parejas, desde un modelo integral',
        img: "/img/posts/Embarazo-adolescente.jpg",
        url: "/posts/maternidades-y-paternidades",
        id: 2,
    },
    {
        titulo: 'Promoviendo el cuidado de la salud sexual DE LOS ADOLESCENTES',
        descripcion: 'CONDICIONANTES EN EL COMPORTAMIENTO EN SALUD SEXUAL',
        img: "/img/posts/promoviendo-cuidado-sexual.png",
        url: "/posts/promoviendo-el-cuidado-de-la-salud-sexual",
        id: 3,
    },
    {
        titulo: 'DIFERENTES MIRADAS A TRAVÉS DEL TIEMPO SOBRE LA ADOLESCENCIA',
        descripcion: 'OBJETIVOS: conocer las diferentes interpretaciones dadas por diferentes autores desde distintas disciplinas, en diferentes etapas históricas hasta nuestros días.',
        img: "/img/posts/diferentes-miradas.jpg",
        url: "/posts/conociendo-diferentes-miradas",
        id: 4,
    },
    {
        titulo: 'APORTANDO EXPERIENCIAS INNOVADORAS PARA LOS EQUIPOS DE SALUD',
        descripcion: '"HOY lo importante es trabajar donde los adolescentes y jovenes se encuentran. LA FAMILIA, LA ESCUELA, EL BARRIO". Dr. Roldan',
        img: "/img/posts/experiencias-innovadoras.png",
        url: "/posts/aportando-experiencias-innovadoras",
        id: 5,
    },
    {
        titulo: 'VALORES Y SEGURIDAD',
        descripcion: 'VALORES Y SEGURIDAD - Aportando a la formación de ciudadanos',
        img: "/img/posts/valores-y-seguridad.jpg",
        url: "/posts/valores-y-seguridad",
        id: 6,
    },
    {
        titulo: 'Casa de la juventud, PROYECTO INSTITUCIONAL',
        descripcion: 'HOGAR DE TRATAMIENTO DE PUERTAS ABIERTAS “BERNARDINO RIVADAVIA”. NIÑOS, ADOLESCENTES Y JÓVENES EN SITUACIÓN DE RIESGO SOCIAL Y VULNERABILIDAD SOCIAL',
        img: "/img/posts/casa-juventud.jpg",
        url: "/posts/promoviendo-el-cuidado-de-la-salud-sexual",
        id: 7,
    },
    {
        titulo: 'UNA MIRADA AL FUTURO',
        descripcion: 'Al definir la formación ciudadana se puede afirmar que esta consiste en un proceso que promueve en las personas valores sociales para que puedan participar y cooperar en el desarrollo de la sociedad con base en esos preceptos, orientados a fomentar el respeto...',
        img: "/img/posts/una-mirada-al-futuro.jpg",
        url: "/posts/promoviendo-el-cuidado-de-la-salud-sexual",
        id: 8,
    },
    {
        titulo: 'ATENCIÓN PRIMARIA DE LA SALUD',
        descripcion: 'ATENCIÓN PRIMARIA DE LA SALUD y CONSTRUCCIÓN DE REDES. ATENCIÓN VINCULARNOS FORTALECE',
        img: "/img/posts/atencion-primaria.jpg",
        url: "/posts/atencion-primaria-de-la-salud",
        id: 9,
    },
    {
        titulo: 'DESARROLLO DE ADOLESCENTES EN ZONAS DE POBREZA Y MARGINALIDAD',
        descripcion: 'Prof. Dr. Cándido Roldán. Argentina',
        img: "/img/posts/desarrollo-jovenes.jpg",
        url: "/posts/desarrollo-de-adolescentes-en-zonas-marginales",
        id: 10,
    },
    {
        titulo: 'EL ROL DEL PEDIATRA ANTE LOS CAMBIOS SOCIALES',
        descripcion: 'Aportes para una reflexión. Dr. Cándido Roldán, Argentina 2020',
        img: "/img/posts/rol-pediatra.jpg",
        url: "/posts/el-rol-del-pediatra",
        id: 11,
    },
    {
        titulo: 'Diferentes escenarios y su impacto sobre la salud de los jóvenes.',
        descripcion: 'El haber transitado más de tres décadas, en mi condición de medico pediatra, me permitió vivir experiencias no aprendidas en la formación de grado, tampoco en la formación como especialista en pediatría...',
        img: "/img/posts/escenarios-politicos.jpg",
        url: "/posts/escenarios-politicos-economicos-y-sociales",
        id: 12,
    },
    {
        titulo: 'ADOLESCENCIAS. EL SEGMENTO IGNORADO',
        descripcion: 'Qué entendemos por  SALUD INTEGRAL: El estado de bienestar general del ser humano, entiéndase salud física, mental y social, es lo que la OMS (Organización Mundial de la Salud) define como Salud Integral. Es decir, un conjunto de factores biológicos, emocionales y espirituales que contribuyen a un estado de equilibrio en el individuo.',
        img: "/img/posts/adolescentes-segmento.jpg",
        url: "/posts/adolescencia-el-segmento-ignorado",
        id: 13
    },
    {
        titulo: 'ESTILOS DE VIDA. UNA MIRADA DESDE LAS CIENCIAS DE LA SALUD',
        descripcion: 'El objetivo de este capítulo será analizar los escenarios sociales, su complejidad, las diferentes formas y comportamientos de las poblaciones y su repercusión en la salud de las poblaciones.',
        img: "/img/posts/estilos-de-vida.png",
        url: "/posts/estilos-de-vida",
        id: 14,
    },
    {
        titulo: 'VIOLENCIA ESCOLAR',
        descripcion: 'Los actos violentos o agresivos vienen preocupando a la sociedad desde los años setenta, década en que aparecen, con magnitud preocupante en países como Estados Unidos, Suecia, Noruega y el Reino Unido...',
        img: "/img/posts/violencia.jpg",
        url: "/posts/violencia-escolar",
        id: 15,
    },
    {
        titulo: 'Violencia intrafamiliar',
        descripcion: 'El concepto de violencia familiar involucra la violencia conyugal, la violencia hacia los niños, adolescentes y jóvenes y la violencia hacia los ancianos. No resulta fácil indagar sobre todas las causas o factores que contribuyen a desencadenar una situación de violencia familiar.',
        img: "/img/posts/violencia-familiar.jpg",
        url: "/posts/violencia-intrafamiliar",
        id: 16,
    },
    {
        titulo: 'AYUDANDO A FORMAR HIJOS RESPONSABLES',
        descripcion: 'Este programa destinado a una población de quince millones de habitantes fue implementado con mil doscientos profesionales universitarios rentados, nos permite arribar a las siguientes conclusiones',
        img: "/img/posts/hijos-responsables.jpg",
        url: "/posts/formando-hijos-responsables",
        id: 17,
    },
    {
        titulo: 'ABUSO DE SUSTANCIAS',
        descripcion: 'El Programa de Prevención y Asistencia de la Drogadependencia de la Provincia de Buenos Aires, tiene su origen en el Instituto de Drogadependencia de la Universidad del Salvador, de la ciudad de Buenos Aires, lugar donde me desempeño cono profesor titular de la cátedra de Prevención. ',
        img: "/img/posts/abuso-sustancias.png",
        url: "/posts/abuso-de-sustancias",
        id: 18,
    },
    {
        titulo: 'LA SALUD INTEGRAL DE ADOLESCENTES Y JÓVENES',
        descripcion: 'Detección de riesgos y propuestas de acción. Una propuesta para la comunidad y profesionales que se interesen por esta población trabajo entre todos. “LA SALUD ES UNA CONSTRUCCION SOCIAL. SE CONSTRUYE Y SE DETERIORA EN LA COMUNIDAD”',
        img: "/img/posts/salud-integral.png",
        url: "/posts/salud-integral-de-los-jovenes",
        id: 19,
    },

]


module.exports = {
    index: (req, res) => {
        res.render('index')
    },
    about: (req, res) => {
        res.render('acerca-de')
    },
    contacto: (req, res) => {
        res.render('contacto')
    },
    posts: (req, res) => {
        res.render('posts', {posts: posts})
    }
    
}