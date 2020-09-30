import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';


export const Pagination = ({
    itemsCount,
    pageSize,
    onChangePage,
    currentPage
}) =>{

    let endIndex = Math.ceil(itemsCount / pageSize);
    if (endIndex === 1) return null;

    let pages = _.range(1, endIndex + 1);

    return (
        <nav>
            
            <ul className="pagination pagination-sm">
                {pages.map((item) => (
                    <li 
                        className={currentPage === item ? "page-item active" : "page-item"}
                        aria-current="page"
                        key={item}
                    >
                        <a className="page-link" href="#abs" style={{cursor: 'pointer'}} onClick={() => {onChangePage(item)}}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    currentPage:PropTypes.number.isRequired,
}