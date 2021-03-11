import React from 'react'

const Search = ({ value, handleChange, handleClick }) => {

    return (
        <div className="container">
            <form>
                <div className="form-group row">
                    <div className="col-10">
                        <input
                            type='text'
                            name="search"
                            className="form-control"
                            value={value}
                            placeholder="Search Character Name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-2">
                        <button
                            type='submit'
                            className="btn btn-primary float-right"
                            onClick={handleClick}
                        >
                            Search
                    </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search