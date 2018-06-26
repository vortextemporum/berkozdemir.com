import React from 'react';
import Card from './card.jsx'

const CardList = ({ projects }) => {
    return (
        <div className=''>
        {    
            projects.map((user, i) => {
                return (
                    <Card 
                        key={i} 
                        id={projects[i].id} 
                        name={projects[i].name}  
                        short_description={projects[i].short_description}
                        year={projects[i].year}
                        tags={projects[i].tags}
                        image={projects[i].image}
                        url={projects[i].name}
                        />
                );
            })
        };
        
        </div>
    );
}


export default CardList;