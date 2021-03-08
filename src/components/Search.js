import React from 'react'

function Search(props) {
    return (
        <div className="container">
            <form>
                <div className="form-group row">
                    <div className="col-10">
                        <input
                            type='text'
                            name="search"
                            className="form-control"
                            value={props.value}
                            placeholder="Search Character Name"
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className="col-2">
                        <button
                            type='submit'
                            className="btn btn-primary float-right"
                            onClick={props.handleClick}
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