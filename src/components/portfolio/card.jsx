import React from 'react';

const Card = ({name,short_description,year,tags,image,url}) => {

    return (
        <a className='bg-light-green dib br3 pa3 ma2 grow' title={name} href={url}>
            <div>
            <img alt={name} src={image} width="200px" />
            <div>
                <h2 className="ml0 fw9">{name}</h2>
                <p>{short_description}</p>
            </div>
            </div>
        </a>
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