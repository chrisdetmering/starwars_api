import React from 'react'
import TableRow from './TableRow'

const Table = ({ charData }) => {
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