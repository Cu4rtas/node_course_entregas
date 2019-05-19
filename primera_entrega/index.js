let {notas, cursos} = require('./helpers')

/**
 * Muestra todos los cursos y su información cada 2 segundos
 */
function showCourses() {
    console.log('//////////////CURSOS//////////////')
    cursos.map((e,i)=>setTimeout(()=>console.log(e),i*2000))
}



showCourses()