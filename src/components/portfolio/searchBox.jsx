import React from 'react';
// import { TitleBar, Toolbar, SearchField } from 'react-desktop/macOs';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>

        {/* <SearchField
            margin="150px,150px"
            placeholder="Search"
            defaultValue=""
            onChange={searchChange}
          /> */}

        <input 
            type="search" 
            placeholder='Filter by name'
            className='code pa2 bd b--near-black bg-black-50 hover-bg-black white shadow-5 mv3'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox