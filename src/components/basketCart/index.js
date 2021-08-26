import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getTotalBasketCount, getTotalBasketPrice} from '../../selectors'


const BasketCart = ({totalBaketCount, totalPrice}) => {
    return (
        <div className='cart'>
            <div className="dropdown">
                <Link 
                to='/basket' 
                id='dLabel' 
                className='btn btn-inverse btn-blick btn-lg'
                >
                    <i className="fa fa-fa-shoppiing-cart"></i>
                    <span>{totalBaketCount} item(s) - ${totalPrice}</span>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        totalBaketCount: getTotalBasketCount(state),
        totalPrice: getTotalBasketPrice(state)
    }
}

export default connect(mapStateToProps)(BasketCart);