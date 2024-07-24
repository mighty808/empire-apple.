import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <>
        
        <img className='header' src={assets.header_image} alt="" />
        <div className='header'>
            <div className='header-contents'>
            <h2>Experience the Best Smartphones to Purchase</h2>
            
            <p>Explore our extensive selection of top-tier smartphones, each designed to meet your needs with cutting-edge technology and superior performance.</p>

        <Link to='/products'>
            <button>View Products</button>
        </Link>
            </div>
        </div>

        </>
    )
}

export default Header
