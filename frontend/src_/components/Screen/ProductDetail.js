import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"
import Rating from "../Rating/index"
import { useGetProductDetailsQuery } from '../../slices/productSlice'
import { addToCart } from "../../slices/cartSlice"
import { useDispatch } from 'react-redux'

const ProductDetail = () => {
    const { id: productId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [qty, setQty] = useState(1)

    const { data: productItem, isLoading, error } = useGetProductDetailsQuery(productId);

    const addToCartHandler = () => {
        dispatch(addToCart({
            ...productItem, qty
        }));
        navigate('/cart')
    }


    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>
            {isLoading ? (<h2> Laoding ...</h2 >) : error ? <div>{error?.data?.message || error.error}</div> : (<Row className="mt-4">
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
                            {productItem.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control as='select' value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                                                {[...Array(productItem.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {
                                                            x + 1
                                                        }
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item>
                                <Button
                                    className="btn-block btn-success btn-md mt-2"
                                    type="button"
                                    disabled={productItem.countInStock === 0}
                                    style={{ color: "#fff" }}
                                    onClick={addToCartHandler}
                                >
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>)}
        </>
    )
}

export default ProductDetail
