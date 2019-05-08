import React, {Component} from 'react';
import '../css/contact.css';
import animatedGif from "./images/halele.gif";
class Contact extends Component {
    render() {
        return(
            <div>
                <h1 className="f1 code tc"><span className="red">C͉</span><span className="orange">ȍ</span><span className="yellow">n̋</span><span className="light-green">t͡</span><span className="blue">a̚</span><span className="purple">c̾</span><span className="pink">tͫ</span><span className="near-black"> M͋e̟</span><span className="white">!̶</span></h1>
                <div className="flex flex-warp items-center justify-center">
                    <div className="bg-white-60 br4-ns mh3">
                        <div className="pressstart2p w-80 dib f3 pa2">
                            <ul className="center">
                                <strong>If you need someone to:</strong><br/>
                                <li className="pink mv2">compose / produce music, multimedia works</li>
                                <li className="green mv2">remix / arrange your track(s)</li>
                                <li className="orange mv2">make sound design / music for your films, videogames, videos etc.</li>
                                <li className="blue mv2">do coding for art projects</li>
                                <li className="purple mv2">do live visuals, installations</li>
                            </ul>

                            <ul className="center">
                                <strong>or if you want to...</strong><br/>
                                <li className="mv2">perform my pieces, exhibit and/or publish my works</li>
                                <li className="mv2">book a concert / performance, commition a piece, or have a different job / project offer</li>
                            </ul>
                            <ul className="center">
                                <strong>or..... (again)</strong><br/>
                                <li className=" mv2">if you have any questions about my works</li>
                                <li className=" mv2">just want to say hi</li>
                            </ul>
                        </div>
                        <div id="contact" className="tc f2 pa3">
                            <a href="mailto:hello@berkozdemir.com" className="blink ms-word-art">Send a mail to hello@berkozdemir.com</a>
                        </div>
                    </div>
                    <img src={animatedGif} alt="I have a beautiful gif here" className="ma4"/>
                </div>
            </div>
        )
    }
}

export default Contact;