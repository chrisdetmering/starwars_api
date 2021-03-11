import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import Table from './components/Table'
import Pagination from './components/Pagination'

const App = () => {
    const [search, setSearch] = useState('')
    const [charData, setCharData] = useState([{}])
    const [pageNext, setPageNext] = useState('')
    const [pagePrev, setPagePrev] = useState('')
    const [pageCount, setPageCount] = useState(0)
    const [activePage, setActivePage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = event => setSearch(event.target.value)

    const handleClick = event => {
        event.preventDefault()
        setActivePage(1)
        getCharData(`https://swapi.dev/api/people/?search=${search}`)
    }

    const pageNextClick = () => {
        if (!pageNext) {
            return
        }
        getCharData(pageNext.replace('http', 'https'))
        setActivePage(prevState => prevState + 1)
    }

    const pagePrevClick = () => {
        if (!pagePrev) {
            return
        }
        getCharData(pagePrev.replace('http', 'https'))
        setActivePage(prevState => prevState - 1)
    }

    const pageGoTo = page => {
        setActivePage(() => parseInt(page.slice(-1)))
        getCharData(page.replace('http', 'https'))
    }

    const getCharData = async search => {
        setIsLoading(true)
        const characters = await axios
            .get(search)
            .then(res => {
                setPageCount(() => {
                    return Math.ceil(res.data.count / 10)
                })
                setPageNext(res.data.next)
                setPagePrev(res.data.previous)
                return res.data.results
            })
        await getAdditionalData(characters)
            .catch(err => {
                console.log(err)
            })
        setCharData(characters)
        setIsLoading(false)
    }

    const getAdditionalData = async (characters) => {
        for (const char of characters) {
            const homeworldURL = char.homeworld
            const homeworldData = await axios
                .get(homeworldURL.replace('http', 'https'))
                .then(res => res.data)
                .catch(err => {
                    console.log(err)
                })
            char.homeworld = homeworldData.name
        }
        for (const char of characters) {
            if (char.species.length === 0) {
                char.species = 'Human'
            } else {
                const speciesURL = char.species.toString()
                const speciesData = await axios
                    .get(speciesURL.replace('http', 'https'))
                    .then(res => res.data)
                    .catch(err => {
                        console.log(err)
                    })
                char.species = speciesData.name
            }
        }
    }

    useEffect(() => {
        getCharData(`https://swapi.dev/api/people/`)
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
                isLoading={isLoading}
            />
            <Pagination
                isLoading={isLoading}
                activePage={activePage}
                pageGoTo={pageGoTo}
                pageCount={pageCount}
                pageNextClick={pageNextClick}
                pagePrevClick={pagePrevClick}
                pagePrev={pagePrev}
            />
        </div>
    )
}

export default App