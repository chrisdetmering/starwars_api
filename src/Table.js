import React from 'react'

function Table(props) {

    const results = props.value
    const tableRow = results.map(item => {
        return (
            <tr key={Math.random()}>
                <td>{item.name}</td>
                <td>{item.birth_year}</td>
                <td>{item.height}</td>
                <td>{item.mass}</td>
                <td>{item.homeworld}</td>
                <td>{item.species}</td>
            </tr>
        )
    })

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
                    {tableRow}
                </tbody>
            </table>
        </div>
    )
}

export default Table