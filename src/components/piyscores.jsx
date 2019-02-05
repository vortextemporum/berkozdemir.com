import React, {Component} from 'react';


class PIYScores extends Component {
    render() {
        return (
            <div>
                <h1 className="f1 zcool tc mv3 near-black"> Perform It Yourself </h1> 
                <h1 className="f1 zcool tc fw4 mv3">---  <span className="red">S</span><span className="orange">C</span><span className="yellow">O</span><span className="light-green">R</span><span className="blue">E</span><span className="purple">S</span>  ---</h1>
                <h2 className="f2 yatra tc mv4 center w-90">If you record/document your performances, please post them online and share the link with me! I will post them under the scores on this page.</h2>
                {/* <h2 className="f2 yatra tc mv4 center w-90">Copy, variate</h2> */}
                <div className="bg-black-50 shadow-4-l b--dashed b--orange w-90 center flex flex-column flex-wrap items-around fw7"> 
                   
                    <div id="vegancraft" className="nunito light-yellow bg-red pa4 fl w-100">
                    
                        <p className="b f2 mb2 mt2 yellow fw5">#0 - VEGANCRAFT</p> 
                        <p className="f3 mt2 mb2 yellow">for one person</p> 
                        <p className="f4 mt2 yellow">(2018)</p> 

                        > Open a hardcore survival game in Minecraft. <br /><br />
                        > Live a life in game with a "strict" vegan diet. <br /> <br />

                        > Creative mode is <b>prohibited</b> <br />
{/*                         
                        <p className="f4"><u>Documentation:</u></p>
                        <ul>
                             <li>This spot is available for an url address</li>                            
                        </ul>
                     */}
                    </div>
                    <div id="nomoreblues" className="scode white bg-orange pa4 fl w-100">
                    
                        <p className="f2 mb2 mt2 purple">#1 - #nomoreblues</p> 
                        <p className="f3 mt2 purple">(2019)</p> 

                        > Every time you hear the melody of the song "Chega de Saudade (No More Blues)" by Antonio Carlos Jobim, <br /><br />
                        > consider your relationship with Blues music for a second<br /> <br />     
                    
                    </div>
                    <div id="alarm" className="nunito black bg-yellow pa4 fl w-100">
                    
                        <p className="f2 mb2 mt2 orange">#2 - Alarm Piece</p> 
                        <p className="f3 mt2 mb2 orange">for a group of performers</p> 
                        <p className="f3 mt2 orange">(2018)</p> 

                        > Each performer sits somewhere in the room and sets their alarm / countdown timer between 90 - 300 seconds. <br /> <br /> 
                        > On cue, everyone starts their alarm / timer. <br /> <br /> 
                        > The performance end when the last alarm / timer stops. 
                        
                        <br />
                       
                    </div>
                    {/* <div id="book" className="nunito white bg-dark-green pa4 fl w-100">
                    
                        <p className="f2 mb2 mt2 lightest-blue">#3 - Book Piece</p> 
                        <p className="f3 mt2 mb2 lightest-blue">For minimum 3 performers, preferably in a bookstore</p> 
                        <p className="f3 mt2 lightest-blue">(2018)</p> 

                        > Each performer picks a book. <br /> <br /> 

                        > One of the performers starts reading a paragraph with a spesific tone/mood regardless of the text content, e.g., happy, joyful, hostile, silly, monotonous, ascetic, brutal, robotic, enraged, passionate (it’s open for performer’s imagination). <br /> <br /> 

                        > Others can join anytime before everyone finishes their paragraph, reading their own paragraph with the similar tone/mood If a performer decides to read a new paragraph with a different tone/mood, the other performers stop reading immediately (they ca). <br /> <br /> 

                        > The performers can read no longer than a paragraph at a time. A past tone/mood can not be used again. The same paragraph can not be read again. <br /> <br /> 

                        > If everyone finishes their paragraphs without anyone joining or interrupting, the performance ends. <br /> <br /> 
                        
                        <br />
                        
                    </div> */}
                    
                    <div id="letter" className="nunito black bg-hot-pink pa4 fw8 fl w-100">
                    
                        <p className="f2 mb2 mt2 dark-grey">#4 - too troublesome private communication method</p> 
                        <p className="f3 mt2 mb2 dark-grey">for a sender, and a recipient</p> 
                        <p className="f3 mt2 dark-grey">(2018)</p> 

                        > Sender sends an encrypted message to the recipient via e-mail. <br/><br/>

                        > Sender writes the decryption code on paper, and posts it to the recipient's mail address. <br/><br/>

                        > Recipient isn't obliged to decrypt the message. <br/><br/>

                        > > > > > I personally generated a PGP key with 4096 characters long (RSA) using the GPGTools for Mac, and wrote the whole private key to a a5 sized notebook. Check what <a className="yellow link" href="https://www.openpgp.org/">PGP</a> is, if you have no idea what I'm talking. Shoutout to <a className="link light-green" href="http://nickbriz.com">Nick Briz</a>, I discovered "PGP" thanks to his contact page on his website!
                        
                        <br />
                        
                    </div>

                </div>
            </div>
        )
    }
}





export default PIYScores;