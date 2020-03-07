import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PublisherList extends Component {
    constructor () {
        super()
        this.state = {
            publishers: []
        }
    }

    componentDidMount () {
        axios.get('/api/publishers/all').then(response => {
            this.setState({
                publishers: response.data
            })
        })
    }

    render () {
        const { publishers } = this.state
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>All publishers</div>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    {publishers.map(publisher => (
                                        <Link
                                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                            to={`/publisher/${publisher.id}`}
                                            key={publisher.id}
                                        >
                                            {publisher.name}
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

export default PublisherList