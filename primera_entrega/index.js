const {notas, cursos} = require('./helpers')
const readline = require('readline')

/**
 * Muestra todos los cursos y su información cada 2 segundos
 */
function showCourses() {
    console.log('//////////////CURSOS//////////////')
    cursos.map((e,i)=>setTimeout(()=>console.log(e),i*2000))
}

//TODO: Leer la entrada y completar la segunda historia de usuario...

showCourses()