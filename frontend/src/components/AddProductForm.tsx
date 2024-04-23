import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { ApiError } from '../types/ApiError';
import { getError } from '../utils';
import apiClient from '../apiClient';
import { useNavigate } from 'react-router-dom';

const AddProductForm = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    slug: '',
    image: '',
    description: '',
    price: ''
  });

  const onInputChange = (e: { target: { name: any; value: any; }; }) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const payload = {
        ...product,
        brand: 'Default Brand',
        category: 'Default Category',
        countInStock: 0 
      };
      const { data } = await apiClient.post('/api/products', payload);
      toast.success('Product added successfully!');
      navigate('/'); 
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };

  return (
    <div className="form-container" style={{ paddingBottom: '50px' }}>
      <Form onSubmit={submitHandler} className="form-inner">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter product name"
            value={product.name}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="slug">
          <Form.Label>Slug</Form.Label>
          <Form.Control
            type="text"
            name="slug"
            placeholder="Enter product unique slug"
            value={product.slug}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            placeholder="Enter product image URL"
            value={product.image}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Enter product description"
            rows={3}
            value={product.description}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Enter price"
            value={product.price}
            onChange={onInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
        Add Product
      </Button>
      </Form>
    </div>


  );
};

export default AddProductForm;

