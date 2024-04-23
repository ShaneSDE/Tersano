import express, { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { ProductModel } from '../models/productModel'

export const productRouter = express.Router()
// /api/prodcuts
productRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find()
    res.json(products)
  })
)

productRouter.get(
  '/categories',
  asyncHandler(async (req: Request, res: Response) => {
    const categories = await ProductModel.find().distinct('category')
    res.json(categories)
  })
)

// /api/slug/tshirt
productRouter.get(
  '/slug/:slug',
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ slug: req.params.slug })
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product Not Found' })
    }
  })
)



productRouter.delete('/slug/:slug', asyncHandler(async (req, res) => {
  const product = await ProductModel.findOneAndDelete({ slug: req.params.slug });
  if (product) {
    res.status(200).json({ message: 'Product deleted successfully' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}));

productRouter.post('/', asyncHandler(async (req: Request, res: Response) => {
  const product = new ProductModel({
      name: req.body.name,
      slug: req.body.slug, // 确保slug是唯一的
      image: req.body.image,
      brand: req.body.brand,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      countInStock: req.body.countInStock,
      rating: req.body.rating || 0,
      numReviews: req.body.numReviews || 0
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
}));