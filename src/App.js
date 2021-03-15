import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import Table from './components/Table'
import Pagination from './components/Pagination'

const App = () => {
    const [search, setSearch] = useState('')
    const [charData, setCharData] = useState([]);
    const [page, setPage] = useState(1); 
    const [pageCount, setPageCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getCharData(`https://swapi.dev/api/people/`);
    }, [])


    const handleChange = event => setSearch(event.target.value);

    const handleClick = event => {
        event.preventDefault();
        getCharData(`https://swapi.dev/api/people/?search=${search}`);
    }   


    const handlePageClick = (pageNumber) => { 
        if (pageNumber < 1 || pageNumber > pageCount) {return}
            
        if (search.length > 0) { 
            getCharData(`https://swapi.dev/api/people/?search=${search}&page=${pageNumber}`);
            setPage(pageNumber);
        } else { 
            getCharData(`https://swapi.dev/api/people/?page=${pageNumber}`);
            setPage(pageNumber);
        }
    }

    const getCharData = async url => {
        setIsLoading(true)
        axios.get(url)
            .then(async res => {
                setPageCount(Math.ceil(res.data.count / 10));
                const characters = await getAdditionalData(res.data.results);
                setCharData(characters);
            }).catch(err => {
                console.log(err);
            }).finally(() => { 
             setIsLoading(false);
            })
    }

    const getAdditionalData = async (characters) => {
        return Promise.all(characters.map(async character => { 
            character.homeworld = await getHomeWorld(character.homeworld);
            character.species = await getSpecies(character.species.toString());
            return character; 
        }));
    }

    const getHomeWorld = (url) => { 
        return axios
        .get(url.replace('http', 'https'))
        .then(res => res.data.name)
        .catch(err => {
            console.log(err);
        });
    }

    const getSpecies = (url) => { 
        if (url.length === 0) { 
            return "Human"; 
        }
        return axios
        .get(url.replace('http', 'https'))
        .then(res => res.data.name)
        .catch(err => {
            console.log(err);
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
                charData={charData}
                isLoading={isLoading}
            />
            <Pagination
                isLoading={isLoading}
                currentPage={page}
                changePage={handlePageClick}
                pageCount={pageCount}
            />
        </div>
    )
}

export default App