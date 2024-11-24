import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"
import Rating from "../Rating/index"
import axios from 'axios'

const ProductDetail = () => {
    const { id: productId } = useParams()

    const [productItem, setProductItem] = useState([])
    const [loading, setLoading] = useState(true) // Add loading state
    const [error, setError] = useState(null) // Add error state if something goes wrong

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`/api/products/${productId}`)
                setProductItem(data)
                setLoading(false)
            } catch (error) {
                setError('Error fetching products')
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    // Find the product based on the numericProductId
    //const productItem = products.find((p) => p._id === numericProductId)

    // Conditional rendering for loading and error handling
    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    // Handle the case where no product is found
    if (!productItem) {
        return <h2>Product not found</h2>
    }

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>
            <Row className="mt-4">
                {/* Product Image Section */}
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <Image
                        src={productItem.image}
                        alt={productItem.name}
                        fluid
                        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                    />
                </Col>

                {/* Product Details Section */}
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2 style={{ fontWeight: 'bold' }}>{productItem.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={productItem.rating} text={`${productItem.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Price: ${productItem.price}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{productItem.desc}</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                {/* Purchase Section */}
                <Col md={3}>
                    <Card className="p-3" style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${productItem.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        <strong>{productItem.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button
                                    className="btn-block btn-success btn-md mt-2"
                                    type="button"
                                    disabled={productItem.countInStock === 0}
                                    style={{ color: "#fff" }}
                                >
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductDetail
