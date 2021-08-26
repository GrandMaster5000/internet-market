import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhones } from '../../actions';
import {getPhones} from '../../selectors';
import * as R from 'ramda';
import { Link } from 'react-router-dom';

class Phones extends Component {
    componentDidMount(){
        this.props.fetchPhones();
    }

    renderPhone (phone, index) {
        const shortDescr = `${R.take(60, phone.description)}...`;
        console.log(phone.img);
        return (
            <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
                <div className="thumbnail">
                    <img src={phone.image} alt={phone.name} className="img-thumbnail" />
                    <div className="caption">
                       <h4 className="pull-right">${phone.price}</h4> 
                       <h4>
                            <Link to={`/phones/${phone.id}`}>
                                {phone.name}
                            </Link>
                       </h4>
                       <p>{shortDescr}</p>
                       <p className="itemButton">
                           <button className="btn btn-primary">
                               Buy now
                           </button>
                           <Link to={`/phones/${phone.id}`} className='btn btn-default'>
                                More info
                            </Link>
                       </p>
                    </div>
                </div>
            </div>
        )
    }

    render () {
        const {phones} = this.props;
        return (
            <div className='books row'>
                {phones.map((phone, index) => this.renderPhone(phone, index))}
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchPhones
}

const mapStateToProps = state => ({
    phones: getPhones(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(Phones);