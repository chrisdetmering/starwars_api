import React from 'react'

const Pagination = (props) => {
    return (
        <nav aria-label="...">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link" href="/#" tabIndex="-1" aria-disabled="true">Previous</a>
                </li>
                <li className="page-item active" aria-current="page">
                    <a className="page-link" href="/#">1 <span className="sr-only">(current)</span></a>
                </li>
                <li className="page-item"><a className="page-link" href="/#">2</a></li>
                <li className="page-item"><a className="page-link" href="/#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="/#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination