import React from 'react'
import Header from './Header'
import Search from './Search'
import Table from './Table'

function App() {

    handleChange(e) {
        e.preventDefault();
    }

    return (
        <div>
            <Header />
            <Search handleChange={handleChange()} />
            <Table />
        </div>
    )
}

export default App