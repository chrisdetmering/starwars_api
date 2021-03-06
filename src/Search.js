import React from 'react'

function Search(props) {
    return (
        <div>
            <form>
                <input
                    type='text'
                    name="search"
                    placeholder="Search Character Name"
                    onChange={props.handleChange}
                />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search