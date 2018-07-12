import React, {Component} from 'react';
import '../css/contact.css'

class Contact extends Component {
    render() {
        return(
            <div>
                <h1 className="f1 code tc"><span className="red">C͉</span><span className="orange">ȍ</span><span className="yellow">n̋</span><span className="green">t͡</span><span className="blue">a̚</span><span className="purple">c̾</span><span className="pink">tͫ</span><span className="near-black"> M͋e̟</span><span className="white">!̶</span></h1>
                <div className="bg-black-30 br4-ns mh2">
                    <div className="pressstart2p w-60 dib f3 pa2">
                        <ul className="center">
                            If you need someone to:<br/>
                            <li className="green mv2">Compose / produce / arrange music for you</li>
                            <li className="green mv2">Remix your track(s)</li>
                            <li className="blue mv2">Do some coding for your art projects</li>
                            <li className="orange mv2">Make sound design / music for your films, videogames, videos etc.</li>
                            <li className="purple mv2">Do live visuals for your performances</li>
                        </ul>
                    </div>
                    <div id="contact" className="tc f2 pa4">
                        <a href="mailto:berk.ozd@gmail.com" className="blink ms-word-art">Send a mail to berk.ozd@gmail.com</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;