import React from 'react'

const Pagination = ({ pageCount, pageGoTo, pageNextClick, pagePrevClick, activePage, isLoading }) => {

    const createPageButtons = pageCount => {
        const pageButtons = []
        for (let i = 1; i <= pageCount; i++) {
            pageButtons.push(<li key={i}
                className={activePage === i ? "page-item active" : "page-item"}>
                <a className="page-link"
                    onClick={() => pageGoTo(`http://swapi.dev/api/people/?page=${i}`)}
                    href="/#">{i}
                </a>
            </li>)
        }
        return pageButtons
    }

    if (isLoading) {
        return (
            <div></div>
        )
    }

    return (
        <nav aria-label="...">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" onClick={pagePrevClick} href="/#" tabIndex="-1" aria-disabled="false">Previous</a>
                </li>
                {createPageButtons(pageCount)}
                <li className="page-item">
                    <a className="page-link" onClick={pageNextClick} href="/#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination

