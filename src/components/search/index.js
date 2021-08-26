import React, { Component } from 'react'
import { connect } from 'react-redux'
import {searchPhone} from '../../actions/';

class Search extends Component {

    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchPhone(this.state.value);
    }

    render() {
        return(
            <div className='well blosd'>
                <h3 className="lead">Quick shop</h3>
                <div>
                    <form className="input-group" onSubmit={this.handleSubmit}>
                        <input 
                        type="text" 
                        onChange={this.handleChange}
                        className='form-control'
                        value={this.state.value}
                        />
                        <span className="input-group-btn">
                            <button type='submit' className="btn btn-default">
                                <span className="glyphicon glyphicon-search"></span>
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = {
    searchPhone
}

export default connect(null, mapDispatchToProps)(Search);