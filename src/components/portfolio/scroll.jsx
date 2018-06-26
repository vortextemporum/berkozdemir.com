import React from 'react';

const Scroll = (props) => {
    return (
        <div className='flex flex-wrap justify-around'>
            {props.children}
        </div> )
};

export default Scroll;