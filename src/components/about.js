import React, {Component} from 'react';
import Typed from 'react-typed';
import { Window, TitleBar} from 'react-desktop/macOs';
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketches/spinRadios";
import '../css/about.css';


export default class About extends Component {
    
    render() {
        return(
            <div>
            <pre className="tc fw7 f2 lh-title white">{"   "}___{"     "}___{"     "}___{"    "}_{"   "}_{"   "}_____{"  "}{"\n"}{"  "}/{"   "}\{"   "}| _ ){"   "}/ _ \{"  "}| | | | |_{"   "}_| {"\n"}{"  "}| - |{"   "}| _ \{"  "}| (_) | | |_| |{"   "}| |{"   "}{"\n"}{"  "}|_|_|{"   "}|___/{"   "}\___/{"   "}\___/{"   "}_|_|_{"  "}{"\n"}_|"""""|_|"""""|_|"""""|_|"""""|_|"""""| {"\n"}"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-' {"\n"}</pre>
                <div className="flex flex-wrap justify-around items-start">
                    <Window className='ma3'
                chrome
                height="100%"
                width="50%"
                padding="5%"
                
            >
                        <TitleBar title="aboutme.txt" />
                        <div className='nunito'>
                            <Typed className='f3 tc'
                                strings={[`Hi everyone! My name is Berk Özdemir. <br/>I was born in Amsterdam, raised in Istanbul, now based in Den Haag. <br/> Currently, I am doing my Master's studies at the ArtScience Interfaculty.`]} 
                                typeSpeed={30} 
                            />
                        
                        </div>
                    </Window>
                    <div className='ma4'>
                        <P5Wrapper sketch={sketch}/>
                    </div>

                <Window className='ma3'
                chrome
                height="100%"
                width="50%"
                padding="5%"
                
            >

            </Window>
            </div>
        </div>
        )
    }
}
