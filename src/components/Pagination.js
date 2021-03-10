import React from 'react'

const Pagination = ({ pageCount, pageGoTo, pageNextClick, pagePrevClick, pagePrev, activePage, isLoading }) => {

    const createPageButtons = pageCount => {

        const pageButtonArray = []
        for (let i = 1; i < pageCount + 1; i++) {
            pageButtonArray.push(<li key={i}
                className={activePage === i ? "page-item active" : "page-item"}>
                <a className="page-link"
                    onClick={pageGoTo}
                    href="/#">{i}
                </a>
            </li>)
        }
        return pageButtonArray
    }
    if (isLoading) {
        return (
            <div></div>
        )
    }
    return (
        <nav aria-label="...">
            <ul className="pagination justify-content-center">
                <li className={pagePrev ? "page-item" : "page-item disabled"}>
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

