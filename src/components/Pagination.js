import React from 'react'

const Pagination = ({ pageCount, changePage, currentPage, isLoading }) => {

    const createPageButtons = pageCount => {
        const pageButtons = []
        for (let i = 1; i <= pageCount; i++) {
            pageButtons.push(
                <li key={i}
                    className={currentPage === i ? "page-item active" : "page-item"}>
                    <a className="page-link"
                        onClick={() => changePage(i)}
                        href="/#">{i}</a>
                </li>)
        }
        return pageButtons
    }


    if (isLoading) {
        return null; 
    }

    return (
        <nav aria-label="...">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" onClick={() => changePage(currentPage - 1)} href="/#" tabIndex="-1" aria-disabled="false">Previous</a>
                </li>
                {createPageButtons(pageCount)}
                <li className="page-item">
                    <a className="page-link" onClick={() => changePage(currentPage + 1)} href="/#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination

