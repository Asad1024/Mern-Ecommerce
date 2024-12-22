import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const index = ({ value, text }) => {
    return (
        <div className="rating">
            <span style={{ color: '#f8e825', fontSize: '1.2rem' }}>
                {value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
            <span style={{ color: '#f8e825', fontSize: '1.2rem' }}>
                {value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
            <span style={{ color: '#f8e825', fontSize: '1.2rem' }}>
                {value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
            <span style={{ color: '#f8e825', fontSize: '1.2rem' }}>
                {value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
            <span style={{ color: '#f8e825', fontSize: '1.2rem' }}>
                {value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>
            <span style={{ marginLeft: '0.5rem', fontSize: '0.9rem', color: '#6c757d' }}>
                {text && text}
            </span>
        </div>
    )
}

export default index;
