import {Router} from 'express'
import mongoose from "mongoose";
import {getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct} from '../controllers/productController.js'

  const router = Router()

  router.get('/', async (req, res) => {
    const products = await getProducts()
    res.send(products)
  })

  router.get('/:id', async (req, res) => {
    const product = await getProductById(req.params.id)
    res.send(product)
  })

  router.post('/', async (req, res) => {
    const body = req.body
    try {
      const newProduct = await createProduct(body)
      res.status(201)
      res.send(newProduct)
    } catch (error) {
      if(error instanceof mongoose.Error.ValidationError){
        res.status(400)
        return res.send({
          message: "Error de validación",
          reason: error.message
        })
      }
      res.status(500)
      return res.send({
        message: error.message
      })
    }
  })

  router.put('/:id', async (req, res) => {
    const body = req.body
    const {id} = req.params
    const product = await updateProduct(id, body)
    !product ? res.status(404) : res.send(product)
  })

  router.delete('/:id', async (req, res) => {
    const {id} = req.params
    const result = await deleteProduct(id)
    res.send(result)
  })

  export default router