import { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Store } from '../Store'
import { CartItem } from '../types/Cart'
import { Product } from '../types/Product'
import { convertProductToCartItem, getError } from '../utils'
import Rating from './Rating'
import apiClient from '../apiClient'
import { ApiError } from '../types/ApiError'
import { useGetProductsQuery } from '../hooks/productHooks'


function ProductItem({ product }: { product: Product }) {
  const [deleted, setDeleted] = useState(false);
  const { data: products, refetch } = useGetProductsQuery();
  const { state, dispatch } = useContext(Store)
  // const {
  //   cart: { cartItems },
  // } = state
  useEffect(() => {
    if (deleted) {
      refetch(); // Only refetch if a product has been deleted
      setDeleted(false); // Reset the deleted state
    }
  }, [deleted, refetch]);
  const deleteProductHandler = async (slug: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        console.log(`Deleting product with slug: ${slug}`);
        const response = await apiClient.delete(`/api/products/slug/${slug}`);
        console.log('Product deleted successfully', response.data);
        toast.success('Product deleted successfully');
        setDeleted(true);
        // Optionally refresh the list or handle UI changes
      } catch (err) {
        console.error('Failed to delete product:', err);
        toast.error(getError(err as ApiError))
      }
    }
  };
  
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>{product.description}</Card.Text> {/* Display the description */}
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
      <Button variant="danger" onClick={() => deleteProductHandler(product.slug)}>
      Delete
    </Button>
    </Card>
  )
}

export default ProductItem
