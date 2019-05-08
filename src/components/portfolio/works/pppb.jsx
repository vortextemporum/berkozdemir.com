import React, {Component} from 'react';
import pppbpic from "../../images/gmodquartet.png"
export default class PPPB extends Component {
    render() {

        return (
        <div className="scode w-90 bg-white-60 b--dashed b--orange mt3 ma5 near-black">
            <h1 className="f1 tc"> <span className="red">P</span>SEUDO <span className="red">P</span>LAYER <span className="red">P</span>ERFORMER <span className="red">B</span>OTS </h1>
            <h2 className="tc f4 i"> "also may known as PPPB, or PPPb" </h2>
            
            <div>
                <img src={pppbpic} alt="pppb" width="800px" className="flex center"/>
                <p className="f4 fw8 ph4">PPPB is an audiovisual composition and performance tool made in <a className="link hover-red" href="https://gmod.facepunch.com/">Garry's Mod</a> Lua and <a className="link hover-red" href="https://cycling74.com/">Max </a>to create and control up to 64 fake player bots in real time using the MIDI protocol.
                You can either hook a Midi Instrument, or play a Midi file to interact with PPPB; or use the Max module I made to experiment with PPPB directly without the need of figuring out the MIDI mapping (highly recommended for the beginners to understand how PPPB works and what it's capable of).</p>
                <p className="f4 fw8 ph4">Max module can be used in two different ways:
                    <li>Calling each PPPb with "bpatcher PPPB", which allows you to use an GUI with all parameters & inlets</li>
                    <li>Abstracting the module with player number as the first argument like "PPPB 15"; you can send messages directly to it (check the main.maxpat in examples to see how you can send messages, I prepared a routing system which allows you to generate algorithmic sequences easily) </li>
                </p>
            
            </div>
            <div className="w-50 center ma2 nunito f4 tc">
                    <h3 className="">Github repo to access to the source code, instructions, MIDI Mapping and project logbook I wrote: </h3>
                    <a className="link red hover-green" href="https://github.com/vortextemporum/pppb">https://github.com/vortextemporum/pppb</a>
            </div>  
            <div className="flex flex-wrap justify-center">
            
                <div className ="tc center fw-8 w-100">
                    <h2 className="ma2 fw8">Pieces made with PPPB:</h2>
                </div>
                <div className="ma2">
                    <h3 className="nunito">quartet #01</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/h82d2kINH8M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="ma2">
                    <h3 className="nunito">piece 1</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Zc2SOyyX6qA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="ma2">
                    <h3 className="nunito">white room etude #01 for square squad</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eUFSybVsSno" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <div className="ma2">
                    <h3 className="nunito">white room etude #02 for square squad</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/w2GLPufYN_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <div className="w-50 ma2">
                    <h3 className="nunito">white room etude #03 for square squad</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gHhZwwMSSTk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                
                <div className="w-50 ma2">
                    <h3 className="nunito">awesome crossfire solos</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/1He1nG98Rec" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <div className="w-50 ma2">
                    <h3 className="nunito">midi keyboard test</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7w2HnKfjsTA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="w-50 ma2">
                    <h3 className="nunito">clapping piece #01</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/wmDZmhrVUfM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <div className="w-50 ma2">
                    <h3 className="nunito">finger snapping piece #01</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dPegR2iyVgE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="w-50 ma2">
                    <h3 className="nunito">finger snapping piece #02</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/u1zjTt4h38U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="w-50 ma2">
                    <h3 className="nunito">algorithmic study #01</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7p2aVs2JblQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    
    )
    

    }
}