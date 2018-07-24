import React, {Component} from 'react';
import '../css/contact.css'
import animatedGif from "./images/halele.gif"
class Contact extends Component {
    render() {
        return(
            <div>
                <h1 className="f1 code tc"><span className="red">C͉</span><span className="orange">ȍ</span><span className="yellow">n̋</span><span className="light-green">t͡</span><span className="blue">a̚</span><span className="purple">c̾</span><span className="pink">tͫ</span><span className="near-black"> M͋e̟</span><span className="white">!̶</span></h1>
                <div className="flex flex-warp items-center justify-center">
                    <div className="bg-white-60 br4-ns mh3">
                        <div className="pressstart2p w-80 dib f3 pa2    ">
                            <ul className="center">
                                If you need someone to:<br/>
                                <li className="pink mv2">Compose / produce music</li>
                                <li className="green mv2">Remix / arrange your track(s)</li>
                                <li className="orange mv2">Make sound design / music for your films, videogames, videos etc.</li>
                                <li className="blue mv2">Do some coding for art projects</li>
                                <li className="purple mv2">Do live visuals for your performances</li>
                            </ul>

                            <p className="ml3">or...</p>
                            <p className="ml3">If you want to book a concert / performance, or have a different job / project offer</p>
                        </div>
                        <div id="contact" className="tc f2 pa3">
                            <a href="mailto:berk.ozd@gmail.com" className="blink ms-word-art">Send a mail to berk.ozd@gmail.com</a>
                        </div>
                    </div>
                    <img src={animatedGif} className="ma4"/>
                </div>
            </div>
        )
    }
}

export default Contact;