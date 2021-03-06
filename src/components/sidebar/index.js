import React from 'react'
import BasketCart from '../basketCart'
import Categories from '../categories'
import Search from '../search'

const Sidebar = () => {
    return (
        <div>
            <BasketCart/>
            <Search/>
            <Categories/>
        </div>
    )
}

export default Sidebar;