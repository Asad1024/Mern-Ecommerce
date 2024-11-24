import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from "../Rating/index"

const index = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded shadow-sm' style={{ width: '18rem', height: 'auto' }}>
            <Link to={`/product/${product._id}`}>
                <Card.Img
                    src={product.image}
                    variant='top'
                    style={{ height: '180px', objectFit: 'cover', borderRadius: '0.25rem' }}
                />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: '#333' }}>
                    <Card.Title as='div' style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div' className="my-2">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as='h3' className="mt-3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default index;
