import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import PublisherList from './PublisherList'
import SinglePublisher from './SinglePublisher'
import BooksList from './BooksList'
import SingleBook from './SingleBook'
import AuthorList from './AuthorList'
import SingleAuthor from './SingleAuthor'
import FeaturedBookList from './FeaturedBookList'
import SearchBooks from './SearchBooks'
class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/books' component={BooksList} />
                        <Route path='/book/:id' component={SingleBook} />
                        <Route path='/search/elastique/:id' component={SingleBook} />
                        <Route exact path='/books/featured/' component={FeaturedBookList} />
                        <Route exact path='/publishers' component={PublisherList} />
                        <Route path='/publisher/:id' component={SinglePublisher} />
                        <Route exact path='/authors' component={AuthorList} />
                        <Route path='/author/:id' component={SingleAuthor} />
                        <Route path='/search' component={SearchBooks} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));