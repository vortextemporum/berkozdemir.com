import React, {Component} from 'react';
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketches/letter";
import '../css/landing.css';
import Typed from 'react-typed';

var stringsfortext = ['trashart', 'errors', 'computer graphics', 'smart contracts', 'screenshots', 'datasets', 'modding', 'sampling', 'everything is a remix', 'everything is a software', 'internet art', 'post internet art', 'post post internet art', 'post post post internet art', 'mashup', 'script', 'automation', 'machine learning', 'NFT', 'crypto', 'raredigitalart', 'algorithms', 'videogames', 'princess camel', 'prenses cemal', 'princesscamel.eth', 'dnumber','ipfs', 'ab123', 'streaming','music','noise','chance','randomness','probability','modular synths','creative coding','blockchain','code bending','data bending', 'glitch', 'jazz', 'microtonality', 'instruments & interfaces','new media', 'xr']

class Landing extends Component {
    render() {
        return(
            <div id=''>
             <P5Wrapper  sketch={sketch}/>
            <div className='pa4 ' id="sketch-holder"></div>
                <div className='f2 tc ma4 near-black scode fw6'></div>
                <div className='f-5 tc ma4 near-black fw6 '>
                    <Typed 
                            strings={['❤️','🧡','💛','💙 ','💜 ','💚','💝','💔','💗', '💓', '💕', '💖', '💞', '💘', '💌', '💟', '❣', '💝']} 
                            typeSpeed={10}
                            backSpeed={10}
                            backDelay={100}
                            smartBackspace
                            // attr={"placeholder"}
                            loop={true}
                            
                        />
                </div>
                <div className='f2 tc ma4 near-black pressstart2p fw6 '>
                    <Typed 
                            strings={['trashart', 'errors', 'computer graphics', 'smart contracts', 'screenshots', 'datasets', 'modding', 'sampling', 'everything is a remix', 'mashups', 'scripts', 'automation', 'machine learning', 'NFT', 'crypto', 'raredigitalart', 'algorithms', 'videogames', 'princess camel','prenses cemal','streaming','music','noise','chance','randomness','probability','modular synths','creative coding','blockchain','code bending','data bending','glitch','jazz','instruments & interfaces','new media','any digital media']} 
                            typeSpeed={10}
                            backSpeed={10}
                            backDelay={10}
                            loop={true}
                            
                        />
                </div>
            </div>
        )
    }
}

export default Landing;