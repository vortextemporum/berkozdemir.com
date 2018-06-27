import React, {Component} from 'react';
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketches/letter";
import '../css/landing.css';
import Typed from 'react-typed';



class Landing extends Component {
    render() {
        return(
            <div id='gradient'>
             <P5Wrapper  sketch={sketch}/>
            <div className='pa4 ' id="sketch-holder"></div>
                <div className='f2 tc ma4 near-black yatra'>
                    <Typed 
                            strings={[`composer`,'producer','performer / improviser', 'multimedia artist', 'creative coder', 'ex youtuber / streamer (I will be back soon!)','huge computer nerd','internet citizen','and doer of many more things']} 
                            typeSpeed={30}
                            backSpeed={30}
                            backDelay={1500}
                            loop={true}
                            
                            
                        />
                </div>
            </div>
        )
    }
}

export default Landing;