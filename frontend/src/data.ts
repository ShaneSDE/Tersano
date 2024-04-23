import { Product } from "./types/Product";

export const sampleProduct:Product[] = [
    {
        _id: "1",
        name: 'Nike shirt',
        slug: 'Nike shirt',
        image: '../images/p1.jpg',
        category: 'shirt',
        brand: 'Nike',
        price: 120,
        countInStock: 10,
        description: 'high quality shirt',
        rating: 10,
        numReviews: 1000
    },
    {
        _id: "2",
        name: 'Nike Slim shirt',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: '../images/p1.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality shirt',
      },
      {
        _id: "3",
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: '../images/p2.jpg',
        price: 100,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        _id: "4",
        name: 'Lacoste Free Pants',
        slug: 'lacoste-free-pants',
        category: 'Pants',
        image: '../images/p3.jpg',
        price: 220,
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        _id: "5",
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: '../images/p4.jpg',
        price: 178,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      
]