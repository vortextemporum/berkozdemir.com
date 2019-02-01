import React, {Component} from 'react';

export default class AvoidTheFeedback extends Component {
    render() {
        
        return (
            <div className="flex">

                <div id="avoidleft" className="w-50">
                    <p className="f-5 tc scode">For more information <br /> and to play,<br /> go to this <a className="link underline gold" href="https://scratch.mit.edu/projects/158707402/">link</a></p>
                </div>
                <div className="br"></div>
                <div id="avoidright" className="w-50">
                    <p className="f1 tc center">Or watch the 2 short videos I recorded from it.</p>
                    <div className="flex justify-around">
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/UC7rKy0NcEU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/HY4oAxT8GKg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            
            </div>
        )

    }
}