import React, {Component} from 'react';

export default class Variations extends Component {
    render() {

        return (
    
        <div className="code w-90 bg-white-60 b--dashed b--orange mt2 pv3 ph6   center near-black">
        <div className="flex flex-wrap justify-center">
            <iframe className="center" width="560" height="315" src="https://www.youtube.com/embed/lcP5vHo7piw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>         
        </div>
        
            <h1 className="f1 tc yatra">Variations on an Advertisement</h1>
            <h1 className="f1 tc yatra">2019</h1>
            <h2 className="tc yatra">fixed media video</h2>
            <h2 className="tc yatra">duration = 17:06 </h2>
            <p>Variations on an Advertisement is a fixed media video piece, made with algorithmic sequences video cuts based on a single video (except the last variation).</p>
            <p>The piece consists of 6 different variations on an Austrian commercial video, which I had randomly downloaded on Youtube using a script I had written, named <a className="link underline red fw-800" href="https://github.com/vortextemporum/random-youtube-downloader">"Random Youtube Downloader"</a>.</p> 
            <p>The original video is titled “EVN Bonuspunkte auch für NÖN-Abo einlösbar”, and the Youtube video ID is <a className="link underline yellow b" href="http://youtu.be/iv3eAJS-YJc">iv3eAJS-YJc</a></p> 
            <p>The algorithmic video cut toolset I made to generate these video sequences is the combination of isobar (to generate the score; arrays of numbers to use for parameters) and MoviePy (to cut video files with the given parameters) libraries for Python. After generating these sequences, I organized and edited the output videos in Premiere to finalize the video piece.</p>

            <ul>
                <li>variation I: 0:08</li>
                <li>variation II: 3:07</li>
                <li>variation III: 4:56</li>
                <li>variation IV: 10:36</li>
                <li>variation V: 14:36</li>
                <li>variation V: 14:36</li>
                <li>variation VI: 16:19</li>
            </ul>
            
        </div>
    
    )
    }
}