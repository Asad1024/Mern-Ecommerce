import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from '../Card/index'
import axios from 'axios'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get("/api/products")
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <>
            <h2 className='py-3'>Latest Products</h2>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Card product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Home