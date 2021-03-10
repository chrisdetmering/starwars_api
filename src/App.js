import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import Table from './components/Table'
import Pagination from './components/Pagination'

const App = () => {
    const [search, setSearch] = useState('')
    const [charData, setCharData] = useState([{}])
    const [pageData, setPageNext] = useState('')
    const [pageCount, setPageCount] = useState(0)

    const handleChange = event => setSearch(event.target.value)

    const handleClick = event => {
        event.preventDefault()
        getCharData(`?search=${search}`)
    }

    const getCharData = async search => {
        const URL = `https://swapi.dev/api/people/${search}`
        const characters = await axios
            .get(URL)
            .then(res => {
                setPageCount(res.data.count)
                setPageNext(res.data.next)
                return res.data.results
            })
        await getAdditionalData(characters)
            .catch(err => {
                console.log(err)
            })
        setCharData(characters)
    }

    const getAdditionalData = async (characters) => {
        for (const char of characters) {
            const homeworldURL = char.homeworld
            const homeworldData = await axios
                .get(homeworldURL)
                .then(res => res.data)
            char.homeworld = homeworldData.name
        }
        for (const char of characters) {
            if (char.species.length === 0) {
                char.species = 'Human'
            } else {
                const speciesURL = char.species
                const speciesData = await axios
                    .get(speciesURL)
                    .then(res => res.data)
                char.species = speciesData.name
            }
        }
    }

    useEffect(() => {
        getCharData('')
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
                charData={charData}
            />
            <Pagination />
        </div>
    )
}

export default App