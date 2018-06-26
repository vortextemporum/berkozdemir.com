import React from 'react';
import { TitleBar, Toolbar, SearchField } from 'react-desktop/macOs';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>

        <SearchField
            margin="150px,150px"
            placeholder="Search"
            defaultValue=""
            onChange={searchChange}
          />

        {/* <input 
            type="search" 
            placeholder='Search!'
            className='pa3 ba b--green bg-lightest-blue'
            onChange={searchChange}
            /> */}
        </div>
    );
}

export default SearchBox