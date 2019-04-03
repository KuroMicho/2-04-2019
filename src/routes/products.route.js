const express = require('express')
const router = express.Router()
const db = require('../db.js')
const slug = require('slug-generator')


router.get('/', async (req, res) => {
    // select * from users
    const products = db.select().from('products')
    const query = req.query
    const per_page = (query.per_page || 10) * 1 //registros por pagina
    const page = (query.page || 1) * 1 //en que pagina estoy actualmente, por defecto pagina 1
    const column_order = query.column_order || "Name"
    const type_order = query.type_order || "ASC"

    products.limit(per_page).offset((page - 1) * per_page)
    products.orderBy(column_order, type_order) //Knex order by.

    const data = {
        per_page: per_page,
        page: page,
        column_order: column_order,
        type_order: type_order,
        data: await products //hasta que se ejecute el await el code no hace la consulta.

    }
    res.json(data)

})

router.post('/', async (req, res) => {
    let data = req.body

    data.slug = slug(data.Name)

    let product = await db('products').insert(data)

    res.send('guardado')


})

router.delete("/:id", async (req, res) => {
    if (!req.params.id) {
        res.send("El id es requerido")
        return false;
    }

    await db('products').where("id", req.params.id).del()

    console.log(req.params)

    res.send("eliminando")


})

router.put("/:id", async (req, res) => {
    const { id } = req.params

    let product = await db.select().from('products').where('id', id);
    console.log(product.length);

    if (!product.length) {
        res.send("el producto no existe")
        return false;

    }


    let data = req.body
    data.slug = slug(data.Name)
    await db('products').where('id', id).update(data)

    res.send("actualizando")

})

module.exports = router