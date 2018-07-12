import React from 'react';
import Card from './card.jsx'


const CardList = ({ projects }) => {
    return (
        <div className="flex justify-center flex-wrap mt2">
        {    
            projects.map((user, i) => {
                return (
                    <Card 
                        key={i} 
                        id={projects[i].id} 
                        name={projects[i].name}  
                        shortDescription={projects[i].shortDescription}
                        year={projects[i].year}
                        tags={projects[i].tags}
                        image={projects[i].image}
                        url={projects[i].url}
                        />
                );
            })
        }
        
        </div>
    );
}


export default CardList;