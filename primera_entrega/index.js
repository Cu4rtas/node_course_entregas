const {cursos} = require('./cursos')
const readline = require('readline')
const fs = require('fs')
const registrado = {
    idcurso: -1,
    nombre: '',
    curso: null,
    cedula: '',
}
const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
})
/**
 * Muestra todos los cursos y su información cada 2 segundos
 */
function run() {
    console.log('/////////////////CURSOS/////////////////')
    cursos.map((e,i)=>setTimeout(()=>console.log(`ID:${e.id} - ${e.nombre} \nDuración: ${e.duracion} Valor: ${e.valor}`),i*2000))
    console.log('**Ingrese "inscribir" para matricularse**')
    rl.on('line',input=>{
        if (input.toLowerCase() == 'inscribir') {
            recordData()
        }
    })
}

/**
 * Selecciona el curso al cual se va a inscribir
 */
function recordData() {
    console.log('Ingrese el id del curso al que desea matricularse')
    rl.on('line',input=>{
        if (!cursos[input]) {
            console.error('Id ingresado no válido, intente de nuevo...')
        }
        else {
            registrado.idcurso = input
            let curso = cursos[input]
            registrado.curso = curso
            console.log(`Curso seleccionado: ${input} ${curso['nombre']} Valor: ${curso.valor} Duración: ${curso.duracion}`)
            registro()
        }
    })
}

/**
 * Guarda los datos del interesado
 */
function registro() {
    rl.question('Ingrese su nombre: ', answer=>{
        registrado.nombre = answer
        rl.setPrompt(`${registrado.nombre} ingrese su cedula:`);
        rl.prompt()
        rl.on('line', function(input){
            registrado['cedula']=input
            console.clear()
            // rl.setPrompt('Se ha registrado correctamente')
            // rl.prompt()
            saveRecord()
            rl.close()
        })
    })
}

/**
 * Guarda el registro del interesado en un archivo .txt
 */
function saveRecord() {
    let data = `El estudiante ${registrado.nombre} con cedula ${registrado.cedula} \nse prematriculó en el curso ${registrado.curso.nombre} con una duración de ${registrado.curso.duracion}\ny un valor de ${registrado.curso.valor}`
    fs.writeFile('registro.txt',data,err=>{
        if (err) throw err
        console.log('Se creo el registro en el archivo "registro.txt"')
    })
}

run()