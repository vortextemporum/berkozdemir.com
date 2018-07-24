import React from 'react';
import {Link} from "react-router-dom";


const Scroll = (props) => {
    let url = props.url;
    let style = props.className;
    
    if (props.url.includes("https://")) {
        // console.log("1")
        return (
            <a href={url} target="_blank" className={style}>
                {props.children}
            </a>
        )
    }
    else if (url.includes("/works")) {
        // console.log("2")
        return (
            <Link to={url} className={style}>
                {props.children}
            </Link>
        )
    }
    else {
        // console.log("3")
        return (
            <div className={style}>
                {props.children}
            </div> )
    }

    // return (<a href={url}> {props.children} </a>)
    
};

export default Scroll;