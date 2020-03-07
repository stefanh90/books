import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AuthorList extends Component {
    constructor () {
        super()
        this.state = {
            authors: []
        }
    }

    componentDidMount () {
        axios.get('/api/authors/all').then(response => {
            this.setState({
                authors: response.data
            })
        })
    }

    render () {
        const { authors } = this.state
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>All authors</div>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    {authors.map(author => (
                                        <Link
                                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                            to={`/author/${author.id}`}
                                            key={author.id}
                                        >
                                            {author.name}
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

export default AuthorList