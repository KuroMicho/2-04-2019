// Framework para crear un servidor web facilmente
const express = require('express')


//Pluggin para leer archivos
const fs = require('fs')
const cors = require('cors')
// Iniciamos el servidor Web desde el metodo express()
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Rutas
app.use('/api', require('./routes/index.route'))

/*app.get('/producto/:nombre?', (req, res) => {
    let productos = JSON.parse(fs.readFileSync('src/db/productos.json', 'utf8'))
    let response = []
    //Si el parametro nombre existe
    if (req.params.nombre) {
        productos.map((value) => {
            if (req.params.nombre == value.nombre) {
                //Aqui se encontro una coincidencia
                response.push(value)
            }
        })
    } else {
        response = productos
    }

    res.json(response)
})

app.post('/producto', (req, res) => {
    let productos = JSON.parse(fs.readFileSync('src/db/productos.json', 'utf8'))

    productos.push(req.body)

    fs.writeFileSync('src/db/productos.json', JSON.stringify(productos))

    res.json(productos)
})

app.delete('/producto/:nombre', (req, res) => {
    let nombre = req.params.nombre
    let productos = JSON.parse(fs.readFileSync('src/db/productos.json', 'utf8'))
    let index

    productos.map((value, i) => {
        if (value.nombre == nombre) {
            index = i
        }
    })

    productos.splice(index, 1)

    fs.writeFileSync('src/db/productos.json', JSON.stringify(productos))

    res.json(productos)
})

app.put('/producto/:nombre', (req, res) => {
    //Actualizar un recurso
    let nombre = req.params.nombre
    let productos = JSON.parse(fs.readFileSync('src/db/productos.json', 'utf8'))
    let index

    productos.map((value, i) => {
        if (value.nombre == nombre) {
            index = i
        }
    })

    productos[index] = req.body
    
    fs.writeFileSync('src/db/productos.json', JSON.stringify(productos))

    res.json(req.body)
})

app.get('/usuario', (req, res) => {
    res.send('Desde GET Usuario')
})*/

// Metodo que permite al servidor web escuchar en un puerto especifico
app.listen(4000, () => {
    console.log('El servidor esta ejecutandose en http://localhost:4000/')
})