import React, {Component} from 'react';
import { Window, TitleBar } from 'react-desktop/macOs';
import Scroll from "./scroll.jsx";

class Card extends Component {
    render() {
        const {
            name,
            shortDescription,
            year,
            image,
            url
        } = this.props;

        return (
            <div className="ma2 dim">                
                <Scroll className="link near-black" title={name} url={url}>
                
                    <Window
                        chrome
                        width="550px"
                        height="240px"
                        background="orange"
                        padding="20px"
                        >
                        <TitleBar title={name} controls/>
                        <div className="flex items-center" style={{"marginRight":"15px"}}>         
                            <img src={image} alt={name} width="200px" height="200px" className="ba-l" />
                        </div>
                        <div className="tl code" style={{width:"295px"}}>
                            <h3 className="m0 fw-600">{name}</h3>
                            <p className=""><b>Year:</b>{year}</p>
                            <span className="i">{shortDescription}</span>
                            {/* <p className="">{tags}</p> */}
                        </div>
                    </Window>
               
                </Scroll>
            </div>
        );
    }
    
}

export default Card;