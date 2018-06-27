import React from 'react';
import { Window, TitleBar, Toolbar, SearchField, Text, SegmentedControl, SegmentedControlItem  } from 'react-desktop/macOs';


const Card = ({name,short_description,year,tags,image,url}) => {

    return (
        <div className="ma2 dim">
            <a href={url} className="near-black link">
            <Window
                chrome
                width="550px"
                height="240px"
                // background="red"
                padding="20px"
                >
                <TitleBar title={name} controls/>
                <div className="flex items-center" style={{"margin-right":"15px"}}>         
                    <img src={image} alt={name} width="200px" height="200px" />
                </div>
                <div className="tl" style={{width:"295px"}}>
                    <h3 className="m0">{name}</h3>
                    <p className=""><b>Year:</b> {year}</p>
                    <span>{short_description}</span>
                    <p>{tags}</p>
                </div>
            </Window>
            </a>
        </div>
    );
}

export default Card;


{/* <a classNameName="db center mw5 black link dim">
            <img classNameName="db ba b--black-10"
                alt="Frank Ocean Blonde Album Cover"
                src=
                height="200" width="200"
                />
                
            <dl classNameName="mt2 f6 lh-copy">
            <dt classNameName="clip">
            Title
            </dt>
            <dd classNameName="ml0 fw9">
            {name}
            </dd>
            
            <dd classNameName="ml0 gray">
            {short_description}
            </dd>
            </dl>
        </a>     */}