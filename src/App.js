import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import Table from './components/Table'
import Pagination from './components/Pagination'

const App = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([{}])

    const handleChange = event => setSearch(event.target.value)

    const handleClick = event => {
        event.preventDefault()
        getDataOnSearch(search)
    }

    const getDataOnSearch = async search => {
        const URL = `https://swapi.dev/api/people/?search=${search}`
        const characters = await axios
            .get(URL)
            .then(res => res.data.results)
        await getHomeworldData(characters)
        await getSpeciesData(characters)

            .catch(err => {
                console.log(err)
            })
        setData(characters)
    }

    const getDataOnLoad = async () => {
        const URL = `https://swapi.dev/api/people/`
        const characters = await axios
            .get(URL)
            .then(res => res.data.results)
        await getHomeworldData(characters)
        await getSpeciesData(characters)

            .catch(err => {
                console.log(err)
            })
        setData(characters)
    }

    const getHomeworldData = async (characters) => {
        for (const char of characters) {
            const homeworldURL = char.homeworld
            const homeworldData = await axios
                .get(homeworldURL)
                .then(res => res.data)
            char.homeworld = homeworldData.name
            console.log(homeworldData.name, char)
        }
    }

    const getSpeciesData = async (characters) => {
        for (const char of characters) {
            if (char.species.length === 0) {
                char.species = 'Human'
            } else {
                const speciesURL = char.species
                const speciesData = await axios
                    .get(speciesURL)
                    .then(res => res.data)
                char.species = speciesData.name
                console.log(speciesData.name)
            }
        }
    }

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