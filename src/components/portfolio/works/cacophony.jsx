import React, {Component} from 'react';

export default class CacoPhony extends Component {
    render() {

        return (
        <div className="code w-90 bg-white-60 b--dashed b--orange mt3 pa6 center near-black">
            <h1 className="f1 tc yatra"> &lt;caco&gt; &lt;/phony&gt; </h1>
            <h2 className="tc yatra"> for browsers and instruments </h2>
            <h2 className="tc yatra"> Commissioned and premiered by <a href="https://www.hodiernalquartet.com">Hodiernal Quartet</a> </h2>
            <p>
                &lt;caco&gt; &lt;/phony&gt; is a multimedia composition written for 3 web browsers and 2 instruments. This piece leads from the question of how each website, providing a different user experience, can be threated as an instrument in a musical composition. During the performance, the screen of each "browser" performer is superimposed over the wall. Each "browser" performer has been given 8-10 different websites which have different characteristics and user interactions (from youtube videos to sega genesis emulators, one purpose websites to interactive drum machines, random loop websites to simple sine tone generators) to play with. In the score, performers are instructed to open certain websites at certain cue points and play with them, and e-guitar and double bass players follow the simple intructions to play along with the browser performers.
            
            </p>
            <p>Here is an excerpt from the text score:</p>
            <div className="i mh4 courier b--dotted b--purple pa3">

                <span className="fw-6"> Cue point 2: </span><br/>
                <p><span className="underline">Browser performer 1:</span> Gradually accelerando with keystrokes on the typewriter website </p>
                <p><span className="underline">B.P. 2:</span> Open "fallingfalling" and fade in the audio </p>
                <p><span className="underline">B.P. 3:</span> Open "ringingtelephone", and let it ring 2-3 times, then close </p>
                <p><span className="underline">Bass Player:</span> Start adding some glissandos </p>
            </div>

            <p>
                For me, working on this composition led me to look at websites from a new aspect to explore the different affordances they can potentially provide in the musical context. As internet and computer technology exponentially grows over the last decade, we are less dependent to install softwares on our computers to do various tasks. Today, browsers can handle 3d rendering, HD video streams, DSP etc without a hassle. Thus I believe that, now we, musicians, should consider the websites as potential instruments to use in our compositions / live performances. For instance, a Youtube video can easily be turned in a trigger-based sampler; the websites allows the user to jump to 10 different points in the video with numpad keys very responsively. Or another example: a <a href="https://experiments.withgoogle.com/ai/bird-sounds/view/">website</a> about the machine learning experiment on bird sounds has a lot of potential performance-wise; with just mouse gestures, it's very easy to turn it to an expressive bird-instrument.
            </p>
            <p>
                I believe that there is a massive resource for musical ideas with incredible possibilities browsers provide which everyone with a smartphone / computer can easily access, thus I will keep experimenting on this.
            </p>


            <div className="flex flex-wrap items-center justify-center">
                <h1>Watch:</h1>
                <iframe title="cacophony" className="ma3 flex" width="560" height="315" src="https://www.youtube.com/embed/3X8sJUHxlBE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
    
    )
    

    }
}