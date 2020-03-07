import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FeaturedBookList extends Component {
    constructor () {
        super()
        this.state = {
            books: []
        }
    }

    componentDidMount () {
        axios.get('/api/books/highlighted').then(response => {
            this.setState({
                books: response.data
            })
        })
    }

    render () {
        const { books } = this.state
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Featured books</div>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    {books.map(book => (
                                        <Link
                                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                            to={`/book/${book.id}`}
                                            key={book.id}
                                        >
                                            {book.title}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeaturedBookList