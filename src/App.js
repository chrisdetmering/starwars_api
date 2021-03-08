import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import Table from './components/Table'
import Pagination from './components/Pagination'

function App() {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([]);

    const handleChange = event => setSearch(event.target.value)

    const handleClick = event => {
        event.preventDefault()
        getData(search)
    }

    const getData = async search => {
        await axios.get(`https://swapi.dev/api/people/?search=${search}`)
            .then(res => {
                console.log(res.data.next)
                const returnData = res.data.results
                setData(returnData.map(data => data))
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getDataOnLoad = async () => {
        await axios.get(`https://swapi.dev/api/people/`)
            .then(res => {
                console.log(res.data)
                const returnData = res.data.results
                setData(returnData.map(data => data))
            })
            .catch(err => {
                console.log(err)
            })
    }

    // write function to .get from homeworld url
    // write function to .get from species url

    useEffect(() => {
        getDataOnLoad()
    }, [])

    return (
        <div>
            <Header />
            <Search
                handleChange={handleChange}
                handleClick={handleClick}
                value={search}
            />
            <Table
                data={data}
            />
            <Pagination />
        </div>
    )
}

export default App