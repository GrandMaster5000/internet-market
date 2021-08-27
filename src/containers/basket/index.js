import React from 'react'
import { connect } from 'react-redux';
import { getTotalBasketPrice, getBasketPhonesWithCount } from '../../selectors';
import * as R from 'ramda';


const Basket = ({phones, totalPrice}) => {
    const isBasketEmpty = R.isEmpty(phones);

    const renderContent = () => (
        <div>
            {isBasketEmpty && <div>Your shopping cart is empty</div>}
            <div className="table-responsive">
                <table className="table-bordered table-condensed table-striped cf">
                    <tbody>
                        {phones.map((phone, index) => (
                            <tr key={index}
                            className='item-checout'>
                                <td className="first-column-checkout">
                                    <img 
                                    src={phone.image} 
                                    alt={phone.name} 
                                    className="img-thumbnail" 

                                    />
                                </td>
                                <td>{phone.name}</td>
                                <td>${phone.price}</td>
                                <td>{phone.count}</td>
                                <td>
                                    <span className='delete-cart'></span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {R.not(isBasketEmpty) && (
                <div className="row">
                    <div className="pull-right total-user-checkout">
                        <b>Total:</b>
                        ${totalPrice}
                    </div>
                </div>
            )}
        </div>
    )

    const renderSidebar = () => (
        <div>Sidebar</div>
    )

    return (
        <div className='view-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {renderContent()}
                    </div>
                    <div className="col-md-3 btn-user-checkout">
                        {renderSidebar()}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        phones: getBasketPhonesWithCount(state),
        totalPrice: getTotalBasketPrice(state)
    }
}
export default connect(mapStateToProps)(Basket);