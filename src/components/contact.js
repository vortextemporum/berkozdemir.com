import React, {Component} from 'react';
import '../css/contact.css'

class Contact extends Component {
    render() {
        return(
            <div>
                <h1 className="f1 tc"><span className="red">C͉</span><span className="orange">ȍ</span><span className="yellow">n̋</span><span className="green">t͡</span><span className="blue">a̚</span><span className="purple">c̾</span><span className="pink">tͫ</span><span className="near-black"> M͋e̟</span><span className="white">!̶</span></h1>
                <div className="pressstart2p flex flex-wrap">
                    <div className="dib f3 w-50 pa2">
                        <ul>
                            If you need someone to:<br/>
                            <li className="green">Produce music / beats or remix your tracks</li>
                            <li className="blue">Do some coding for your art projects</li>
                            <li className="orange">Make sound design / music for your films, videogames, videos etc.</li>
                            <li className="purple">Do some coding for your art project</li>
                        </ul>
                    </div>
                    <div id="contact" className="w-50 pa2">
                        <p>You can contact me sending an email to berk.ozd@gmail.com</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;