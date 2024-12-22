import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from '../Card/index'
import { useGetProductsQuery } from '../../slices/productSlice'


const Home = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();
    return (
        <>
            {isLoading ?
                (<h2> Laoding ...</h2 >)
                : error ? (
                    <div>{error?.data?.message || error.error}</div>
                ) : (
                    <>
                        <h2 className='py-3'>Latest Products</h2 >
                        <Row>
                            {products.map((product) => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Card product={product} />
                                </Col>
                            ))}
                        </Row>
                    </>)}
        </>


    )
}

export default Home