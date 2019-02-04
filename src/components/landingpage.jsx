import React, {Component} from 'react';
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketches/letter";
import '../css/landing.css';
import Typed from 'react-typed';



class Landing extends Component {
    render() {
        return(
            <div id=''>
             <P5Wrapper  sketch={sketch}/>
            <div className='pa4 ' id="sketch-holder"></div>
                <div className='f2 tc ma4 near-black scode fw6 '>
                    <Typed 
                            strings={['re','re(re','re(re(re','re(re(re(re','re(re(re(re(re','re(re(re(re(re(re','re(re(re(re(re(re(re','re(re(re(re(re(re(re[[[mix]]]','re(re(re(re(re(re(re[[[mix]]])))))))'
                            ,'BERKberkBERKberkBERKberk','I kind of feel like', 'you', 'will', 'enjoy', 'this','website']} 
                            typeSpeed={10}
                            backSpeed={10}
                            backDelay={100}
                            loop={true}
                            
                        />
                </div>
            </div>
        )
    }
}

export default Landing;