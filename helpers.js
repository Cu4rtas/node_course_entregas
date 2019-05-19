const notas = [
    {
        nombre: 'Juan',
        matematicas: {
            id: 001,
            nota: 3
        },
        ingles: {
            id: 002,
            nota: 3
        },
        programacion: {
            id: 003,
            nota: 2
        }
    },
    {
        nombre:'Maria',
        matematicas: {
            id: 001,
            nota: 5
        },
        ingles: {
            id: 002,
            nota: 1
        },
        programacion: {
            id: 003,
            nota: 3
        }
    }
]
const cursos = [
    {
        id: 01,
        nombre: 'Matematicas',
        duracion: '6 meses',
        valor: 250000
    },
    {
        id: 02,
        nombre: 'Ingles',
        duracion: '1 año',
        valor: 1000000
    },
    {
        id: 03,
        nombre: 'Programación',
        duracion: '3 meses',
        valor: 500000
    },
]

module.exports = {
    cursos,
    notas
}