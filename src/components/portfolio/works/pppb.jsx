import React, {Component} from 'react';
import pppbpic from "../../images/gmodquartet.png"
export default class PPPB extends Component {
    render() {

        return (
        <div className="scode w-90 bg-white-60 b--dashed b--orange mt3 pa4 center near-black">
            <h1 className="f1 tc"> <span className="red">P</span>SEUDO <span className="red">P</span>LAYER <span className="red">P</span>ERFORMER <span className="red">B</span>OTS </h1>
            <img src={pppbpic} alt="pppb" width="800px" className="flex center"/>
            <h2 className="tc"> also may known as PPPB, or PPPb </h2>
            <h2 className="tc"> Audiovisual composition and performance tool made in <a className="link hover-red" href="https://gmod.facepunch.com/">Garry's Mod</a> Lua and <a className="link hover-red" href="https://cycling74.com/">Max </a></h2>
            
            <h2 className="tc">to create and control up to 64 bots in real time using the MIDI as a bridge.</h2>
            <div className="flex flex-wrap justify-around items-center">
                <div className="w-40 ma2 nunito f4 tc">
                    <h3 className="">Github repo to access to the source code, instructions, MIDI Mapping and project logbook I wrote: </h3>
                    <a href="https://github.com/vortextemporum/pppb">https://github.com/vortextemporum/pppb</a>
                </div>
                <div className="w-40 ma2">
                    <h3 className="nunito">Youtube playlist of dev documentation & video pieces:</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLL-JW4H9We1zRa491Rav-emuWGOD8SQm1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    
    )
    

    }
}