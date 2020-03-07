import React from 'react';
import {Link} from "react-router-dom";

const List = (props) => (
    <Link
        className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
        to={`/search/elastique/${props.book.id}`}
        key={props.book.id}
    >
        {props.book.title}
    </Link>
);

export default List;