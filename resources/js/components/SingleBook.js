
import axios from 'axios'
import React, { Component } from 'react'

class SingleBook extends Component {
    constructor (props) {
        super(props)
        this.state = {
            book: {},
        }
    }

    componentDidMount () {
        const id = this.props.match.params.id

        axios.get(`/api/books/${id}`).then(response => {
            this.setState({
                book: response.data,
            });
        })
    }

    render () {
        const { book } = this.state

        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>{book.title}</div>
                            <div className='card-body'>
                                <p>Featured: {book.featured}</p>
                                {/*<p>Author: {book.author.name}</p>*/}
                                {/*<p>Publisher: {book.publisher.name}</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleBook