
import axios from 'axios'
import React, { Component } from 'react'
import {Link} from "react-router-dom";

class SingleAuthor extends Component {
    constructor (props) {
        super(props)
        this.state = {
            author: {},
        }
    }

    componentDidMount () {
        const id = this.props.match.params.id

        axios.get(`/api/authors/${id}`).then(response => {
            this.setState({
                author: response.data,
            })
        })
    }

    render () {
        const { author } = this.state

        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>{author.name}</div>
                            <div className='card-body'>
                                {/*<ul className='list-group list-group-flush'>*/}
                                {/*    {author.books.map(book => (*/}
                                {/*        <Link*/}
                                {/*            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'*/}
                                {/*            to={`/book/${book.id}`}*/}
                                {/*            key={book.id}*/}
                                {/*        >*/}
                                {/*            {book.title}*/}
                                {/*        </Link>*/}
                                {/*    ))}*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleAuthor