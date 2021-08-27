import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {getCategories, getActiveCategoryId} from '../../selectors';
import { compose } from 'redux';
import classNames from 'classnames';
import * as R from 'ramda';


const Categories = ({categories, activeCategoryId}) => {
    const getActiveState = R.propEq('id', activeCategoryId)
    const renderCategory = (category, index) => {
        const linkClasses = classNames({
            'list-group-item': true,
            'active': getActiveState(category)
        })
        return (
            <Link to={`/categories/${category.id}`}
            className={linkClasses}
            key={index}>
                {category.name}
            </Link>
        )
    }

    const renderAllCategory = () => {
        const linkClasses = classNames({
            'list-group-item': true,
            'active': R.isNil(activeCategoryId)
        })
        return (
            <Link to='/'
            className={linkClasses}>
                All
            </Link>
        )
    }

    return (
        <div className='well'>
            <h4>Brand</h4>
            <div className="list-group">
                {renderAllCategory()}
                {categories.map((category, index) => renderCategory(category, index))}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: getCategories(state),
        activeCategoryId: getActiveCategoryId(ownProps)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps)
)(Categories)