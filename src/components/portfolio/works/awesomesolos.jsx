import React, {Component} from 'react';

export default class AwesomeSolos extends Component {
    render() {

        return (
        
        <div>
        <h1 className="tc code white"> <span className="red">&lt;</span>awesome <span className="yellow">...</span> solos<span className="red">&gt;</span></h1>
        <div className="flex bg-black-20 br3-ns white ma2 flex-wrap items-center">
            <p className="ma2 code pa3">
            With the arrival of the online new-media video streaming platforms such as Youtube, anyone who enjoys playing their instrument found a new way to share their skills. Now, as viewers, we're not dependent to any analog video media or mass media such as T.V. to watch our favourite artist playing live, also we have the opportunity to share our videos with anyone on the planet, without thinking about how "professionally" we play. So now we have access to any kind of musical content.
            </p>
            <p className="ma2 code pa3">
            
            &lt;Awesome ... Solos&gt; is a series of video works which focuses on transforming solo instrument performance videos found on Youtube to a goofy mashup in a new narrative. Several videos are collected for a spesific instrument, chopped and arranged, and the audio files are "midiized" to remove the difference of each video source and bake them in the new goofy narrative.

            </p>
        </div>
        <div className="flex flex-wrap justify-center">
            <iframe title="guitar" className="ma3 " width="560" height="315" src="https://www.youtube.com/embed/z-83z2JH67w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

            <iframe title="piano" className="ma3" width="560" height="315" src="https://www.youtube.com/embed/470kaKzYqMw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        </div>
    
    
    )

    }
}