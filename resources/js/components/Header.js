import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
            <Link className='navbar-brand' to='/books'>Books</Link>
            <Link className='navbar-brand' to='/books/featured'>Featured books</Link>
            <Link className='navbar-brand' to='/publishers'>Publishers</Link>
            <Link className='navbar-brand' to='/authors'>Authors</Link>
            <Link className='navbar-brand' to='/search'>Search</Link>
        </div>
    </nav>
)

export default Header