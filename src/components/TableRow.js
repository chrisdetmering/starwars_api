import React from 'react'


const TableRow = ({ data }) => {

    return data.map(item => {
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

}

export default TableRow