import React from 'react'
import TableRow from './TableRow'

const Table = ({ charData, isLoading }) => {
    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border m-5 text-primary" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Birthdate</th>
                        <th scope="col">Height</th>
                        <th scope="col">Mass</th>
                        <th scope="col">Homeworld</th>
                        <th scope="col">Species</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow
                        charData={charData}
                    />
                </tbody>
            </table>
        </div>
    )
}

export default Table