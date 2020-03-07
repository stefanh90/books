import axios from 'axios'
import React, {Component} from 'react'
import List from './List';

class SearchBooks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            search: '',
            count: 0,
            width: 0,
        };

        this.handleSearch = this.handleSearch.bind(this);

        // Attaching Lodash debounce to avoid frequent ajax requests
        this.getBooks = _.debounce(this.getBooks, 500);
    }

    componentDidMount() {
        // get width of search input for react search widget on initial load
        const width = document.getElementById("app").offsetWidth;
        this.setState(() => ({width: width}));

        // get width of search input for react search widget when page resize
        window.addEventListener('resize', (e) => {
            const newWidth = document.getElementById('app').offsetWidth;
            this.setState(() => ({width: newWidth}));
        });
    }

    handleSearch(e) {
        // check whether arrow keys are pressed using Loadash
        if (_.includes([37, 38, 39, 40, 13], e.keyCode)) {
            if (e.keyCode === 38 || e.keyCode === 40) {
                // To prevent cursor from moving left or right in text input
                e.preventDefault();
            }

            if (e.keyCode === 40 && this.state.books == "") {
                // If book list is cleared and search input is not empty
                // then call ajax again on down arrow key press
                this.getBooks();
                return;
            }

        } else {
            this.getBooks();
        }
    }

    getBooks() {
        this.setState(() => ({
            books: [],
            count: 0,
            search: this.refs.newSearch.value
        }));

        if (this.state.search.trim() != '') {
            axios.post("/api/search/elastique", {
                search: this.state.search
            })
            .then((response) => {
                this.setState(() => ({books: response.data}));
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }


    render() {
        const ulStyle = {
            width: this.state.width + 'px'
        };

        const books = this.state.books.map((book, index) => (
            <List
                key={index}
                book={book}
                index={index + 1}
                count={this.state.count}
            />
        ));

        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Zoek naar boeken</div>
                            <div className='card-body'>
                                <input type="text" autoComplete="off"
                                       onKeyUp={this.handleSearch}
                                       id="search" ref="newSearch"
                                       className="form-control input-lg"
                                       placeholder="Zoek naar een boek"
                                />

                                {this.state.books.length > 0 &&
                                <ul className="widget">
                                    {books}
                                </ul>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default SearchBooks