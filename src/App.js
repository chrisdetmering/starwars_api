import React, { useState } from 'react'
import axios from 'axios'
import Header from './Header'
import Search from './Search'
import Table from './Table'
import Pagination from './Pagination'

function App() {
    const [search, setSearch] = useState('')
    const [display, setDisplay] = useState([]);

    const handleChange = event => {
        setSearch(event.target.value)
    }

    const handleClick = event => {
        event.preventDefault()
        getData(search)
    }

    const getData = search => {
        axios.get(`https://swapi.dev/api/people/?search=${search}`)
            .then(res => {
                const returnData = res.data.results
                setDisplay(returnData.map(data => data))
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div>
            <Header />
            <Search
                handleChange={handleChange}
                handleClick={handleClick}
                value={search}
            />
            <Table
                value={display}
            />
            <Pagination />
        </div>
    )
}

export default App