import { Col, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { useGetProductsQuery } from '../hooks/productHooks'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils'
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Store } from '../Store'


export default function HomePage() {
  const navigate = useNavigate()
  const { data: products, isLoading, error } = useGetProductsQuery();

  const { state, dispatch } = useContext(Store)
  const { userInfo } = state

  if (!userInfo) {
    return <Navigate to="/signin" />;
  }

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>Tersano</title>
      </Helmet>
      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
}