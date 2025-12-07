import React, {Component} from 'react';
import '../css/cv.css'
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketches/gameoflife";

const colorArray = ["#f8f8f2", "#a8a8a2", "#ae81ff", "#a6e22e", "#f92672", "#66d9ef", "#f8f8f2", "#e6db74", "#75715e"];
const randomcolor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
const randomcolor2 = (arr) => arr[Math.floor(Math.random() * arr.length)];


class CV extends Component {
    AnimateTitle() {
        let title = document.getElementById("head");
        let text = title.innerText;
        let newText = "";
        const errorColor = randomcolor();
        //sonra kullanmak için


        for (let char = 0; char < text.length; char++) {
            let letter = text[char]
            if (letter === "#") {
                newText += letter.fontcolor(randomcolor());
            } else {
                newText += letter.fontcolor(errorColor);
            }

        }
        return title.innerHTML = newText;
    }

    ColorifyBaslik() {
        let basliklar = document.getElementsByClassName("baslik");
        for (let i = 0; i < basliklar.length; i++) {
            let baslik = basliklar[i].innerText;
            let newBaslik = ""
                // console.log("baslik", baslik);
            for (let j = 0; j < baslik.length; j++) {
                let harf = baslik[j];
                // console.log("harf", harf);
                newBaslik += harf.fontcolor(randomcolor2(colorArray));
                // console.log(newBaslik);
            }
            basliklar[i].innerHTML = newBaslik;

        }

    }

    ColorifyBorder() {
        let sections = document.getElementsByClassName("section");
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.borderColor = randomcolor2(colorArray)
        }

    }

    componentDidMount(){ 
        this.interval = setInterval(this.ColorifyBaslik, 400);
        this.innterval = setInterval(this.AnimateTitle, 150);
        this.ColorifyBorder();
    } 

    componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.innterval);    
    
    }

    render() {
        return(
                <div className='cv f6'>
                <P5Wrapper sketch={sketch}/>
                <header className='cvheader'>
                    <pre id="head">#########################################################################################################################################{"\n"}##{"  "}.o88b. db{"    "}db d8888b. d8888b. d888888b{"  "}.o88b. db{"    "}db db{"      "}db{"    "}db .88b{"  "}d88.{"   "}db{"    "}db d888888b d888888b{"  "}.d8b.{"  "}d88888b ##{"\n"}## d8P{"  "}Y8 88{"    "}88 88{"  "}`8D 88{"  "}`8D{"   "}`88'{"   "}d8P{"  "}Y8 88{"    "}88 88{"      "}88{"    "}88 88'YbdP`88{"   "}88{"    "}88{"   "}`88'{"   "}`~~88~~' d8' `8b 88'{"     "}##{"\n"}## 8P{"      "}88{"    "}88 88oobY' 88oobY'{"    "}88{"    "}8P{"      "}88{"    "}88 88{"      "}88{"    "}88 88{"  "}88{"  "}88{"   "}Y8{"    "}8P{"    "}88{"       "}88{"    "}88ooo88 88ooooo ##{"\n"}## 8b{"      "}88{"    "}88 88`8b{"   "}88`8b{"      "}88{"    "}8b{"      "}88{"    "}88 88{"      "}88{"    "}88 88{"  "}88{"  "}88{"   "}`8b{"  "}d8'{"    "}88{"       "}88{"    "}88~~~88 88~~~~~ ##{"\n"}## Y8b{"  "}d8 88b{"  "}d88 88 `88. 88 `88.{"   "}.88.{"   "}Y8b{"  "}d8 88b{"  "}d88 88booo. 88b{"  "}d88 88{"  "}88{"  "}88{"    "}`8bd8'{"    "}.88.{"      "}88{"    "}88{"   "}88 88.{"     "}##{"\n"}##{"  "}`Y88P' ~Y8888P' 88{"   "}YD 88{"   "}YD Y888888P{"  "}`Y88P' ~Y8888P' Y88888P ~Y8888P' YP{"  "}YP{"  "}YP{"      "}YP{"    "}Y888888P{"    "}YP{"    "}YP{"   "}YP Y88888P ##{"\n"}#########################################################################################################################################</pre>
                </header>
                <div id="content">
                    <pre className="section"><span className="baslik">Personal Info</span>{"\n"}{"\n"}<span className="a">Name</span>{"          "}<span className="b">Berk Özdemir</span>{"\n"}{"\n"}<span className="a">Birth Location</span><span className="b">Amsterdam</span>{"\n"}{"\n"}<span className="a">Birth Date</span>{"    "}<span className="b">17/04/1992</span>{"\n"}{"\n"}<span className="a">Nationality</span>{"   "}<span className="b">Turkey <span role="img" aria-label="Turkey flag">🇹🇷</span></span>{"\n"}{"\n"}<span className="a">Based</span>{"         "}<span className="b">Den Haag - Netherlands</span>{"\n"}{"\n"}<span className="a">Phone Number</span>{"  "}<span className="b">+31-614488526</span>{"\n"}{"\n"}<span className="a">E-mail</span>{"        "}<a className="b" href="mailto:hello@berkozdemir.com">hello@berkozdemir.com</a>{"\n"}{"        "}</pre>
                    <pre className="section"><span className="baslik">Education</span>{"\n"}{"\n"}<span className="altbaslik">## Part Time Piano (Pre College) ##</span>{"\n"}{"\n"}<span className="a">1</span><span className="b">Istanbul University State Conservatory (1997-2000)</span>{"\n"}<span className="a">2</span><span className="b">Mimar Sinan University of Fine Arts, Istanbul State Conservatory (2000-2008)</span>{"\n"}{"\n"}<span className="altbaslik">## High School ##</span>{"\n"}{"\n"}<span className="b">Cağaloğlu Anadolu Lisesi (2006-2011)</span>{"\n"}{"\n"}<span className="altbaslik">## Composition ##</span>{"\n"}{"\n"}<span className="a">University name</span><span className="b">Mimar Sinan University of Fine Arts, Istanbul State Conservatory</span>{"\n"}<span className="a">Studied between</span><span className="b">2011-2017</span>{"\n"}<span className="a">Department</span>{"     "}<span className="b">Composition</span>{"\n"}<span className="a">Study programme</span><span className="b">Bachelor</span>{"\n"}{"\n"}<span className="altbaslik">## Sonology ##</span>{"\n"}{"\n"}<span className="a">University name</span><span className="b">Koninklijk Conservatorium Den Haag</span>{"\n"}<span className="a">University url</span> <span className="b">http://www.koncon.nl/</span>{"\n"}<span className="a">Department</span>{"     "}<span className="b">Sonology</span>{"\n"}<span className="a">Department url</span> <span className="b">http://www.sonology.org</span>{"\n"}<span className="a">Studied between</span><span className="b">2016-2017 + 2017-2018</span>{"\n"}<span className="a">Study programme</span><span className="b">One year Course</span>{"\n"}<span className="altbaslik">## ArtScience ##</span>{"\n"}{"\n"}<span className="a">University name</span><span className="b">Koninklijk Conservatorium / Art Academy Den Haag</span>{"\n"}<span className="a">University url</span> <span className="b">http://www.koncon.nl/</span>{"\n"}<span className="a">Department</span>{"     "}<span className="b">ArtScience Interfaculty</span>{"\n"}<span className="a">Department url</span> <span className="b">http://www.interfaculty.nl</span>{"\n"}<span className="a">Studied between</span><span className="b">2018-2020</span>{"\n"}<span className="a">Study programme</span><span className="b">Master</span>{"\n"}{"        "}{"\n"}{"        "}</pre>
                    {/* <pre className="section"><span className="baslik">Computer Languages</span>{"\n"}{"\n"}<span className="altbaslik">## Python ##</span><li className="b">Web Scraping</li><li className="b">Algorithmic Video Manipulation/Composition</li>{"\n"}<span className="altbaslik">## HTML/CSS/Javascript ##</span><li className="b">Front-end Web Development</li><li className="b">Web Art</li>{"\n"}<span className="altbaslik">## Supercollider ##</span>{"\n"}<span className="altbaslik">## Max/MSP/Jitter ##</span> <li className="b">Sound/Instrument Design - Audio Synthesis</li><li className="b">Algorithmic Composition</li><li className="b">Live Visuals</li><li className="b">Video Sequencer</li><li className="b">Max 4 Live Devices</li>{"\n"}{"\n"}<span className="baslik">Human Languages</span>{"\n"}{"\n"}<span className="altbaslik">Turkish</span> - <span className="b">Native</span>{"\n"}<span className="altbaslik">English</span> - <span className="b">Advanced</span>{"\n"}<span className="altbaslik">German</span>{"  "}- <span className="b">Intermediate</span>{"\n"}{"\n"}{"        "}</pre> */}
                    {/* Compositions */}
                    {/* <pre className="section"><span className="baslik">Compositions (for instruments)</span>{"\n"}{"\n"}<span className="a">1</span>Şakirt <span className="b">for Solo Flute (2012)</span>{"\n"}<span className="c"> - Premiered by Cem Önertürk, 14/03/2013, Süreyya Operası, Istanbul, Turkey</span>{"\n"}<a className="a1" href="https://soundcloud.com/berk-ozdemir/sakirt-2012-for-solo-flute">Listen</a>{"  "}<a className="a2">Score</a>{"\n"}{"\n"}<span className="a">2</span>Dedeler <span className="b">for String Trio (2012)</span>{"\n"}{"\n"}<span className="a">3</span>Missing No. 1 <span className="b">for Solo Contrabass Clarinet (2013)</span>{"\n"}<span className="c"> - Premiered by Alex Sramek, 09/06/2013, Jan Hus Church, New York City, USA</span>{"\n"}{"\n"}<span className="a">4</span>Missing No 2 <span className="b">Alto Flute, Piano, Violin &amp; Violoncello (2013)</span>{"\n"}<span className="c"> - Premiered by Dissonart Ensemble, 14/10/2013, Thessaloniki, Greece</span>{"\n"}<a className="a1" href="https://soundcloud.com/berk-ozdemir/missing-no-2-for-alto-flute">Listen</a>{"  "}<a className="a2">Score</a>{"\n"}{"\n"}<span className="a">5</span>Halo <span className="b">for Solo Bass Clarinet (2013)</span>{"\n"}{"\n"}<span className="a">6</span>Driptip <span className="b">for 7 Instruments (2015)</span>{"\n"}{"\n"}<span className="a">7</span>(.) "Dot" <span className="b">for Large Orchestra (2017)</span>{"\n"}<a className="a2">Score</a>{"\n"}{"\n"}<span className="a">8</span>BLOCKS <span className="b">for Flute Quartet (2017)</span>{"\n"}<a className="a2">Score</a>{"\n"}{"\n"}<span className="a">9</span>&lt;caco&gt; &lt;/phony&gt;<span className="b">for Instruments and Browsers (2017)</span>{"\n"}<span className="c"> - Premiered by <a className="c" href="https://www.hodiernalquartet.com/">Hodiernal Quartet</a>, 28/06/2017, Studio Loos, Den Haag, Netherlands</span>{"\n"}<a className="a1" href="https://youtu.be/3X8sJUHxlBE">Watch</a>{"\n"}{"\n"}<span className="a">10</span>Lesson 1 <span className="b"> between a Double Bass Student and a Teacher (2018)</span>{"\n"}<span className="c"> - Premiere: TBA</span>{"\n"}{"\n"}{"        "}Installation{"\n"}<span className="baslik">Installations</span>{"\n"}{"\n"}<span className="b">4 Seasons - 28-29 April 2017 - Installation in progress - Haagse Kunstring, Den Haag, Netherlands</span>{"\n"}{"        "}</pre> */}
                    {/* <pre className="section"><span className="baslik">Music Releases</span>{"\n"}{"\n"}<span className="a">1</span>tape/md2eu{"\n"}{"\n"}<li><span className="c">Type</span> - <span className="b">EP</span></li>{"\n"}<li><span className="c">Released on</span> - <span className="b">March 25, 2017</span></li>{"\n"}<li><span className="c">Listen</span> - <a className="a1" href="https://berkozdemir.bandcamp.com/album/tape-md2eu">https://berkozdemir.bandcamp.com/album/tape-md2eu</a></li>{"\n"}{"\n"}<span className="a">2</span>It's Safe to Just Let Go{"\n"}{"\n"}<li><span className="c">Type</span> - <span className="b">Single</span></li>{"\n"}<li><span className="c">Released on</span> - <span className="b">August 2017</span></li>{"\n"}<li><span className="c">Spotify</span> - <a className="a1" href="https://open.spotify.com/album/7GZ6r44ed5VK0rHXADhtkn">https://open.spotify.com/album/7GZ6r44ed5VK0rHXADhtkn</a></li>{"\n"}<li><span className="c">Apple Music</span> - <a className="a1" href="https://itunes.apple.com/us/album/its-safe-to-just-let-go-single/id1275672465">https://itunes.apple.com/us/album/its-safe-to-just-let-go-single/id1275672465</a></li>{"\n"}<li><span className="c">Amazon</span> - <a className="a1" href="https://www.amazon.com/gp/product/B0755QDCMG/">https://www.amazon.com/gp/product/B0755QDCMG/</a></li>{"\n"}<li><span className="c">Deezer</span> - <a className="a1" href="https://www.deezer.com/us/album/46925412">https://www.deezer.com/us/album/46925412</a></li>{"\n"}<li><span className="c">Tidal</span> - <a className="a1" href="https://tidal.com/album/77956939">https://tidal.com/album/77956939</a></li>{"\n"}{"\n"}<span className="baslik">Audiovisual Works</span>{"\n"}-------{"\n"}-------{"\n"}{"        "}</pre> */}
                    {/* <pre className="section"><span className="baslik">Channels</span>{"\n"}{"\n"}<span className="a">Channel 1</span>{"      "}Videoyun{"\n"}<span className="a">Members</span>{"        "}<span className="b">Berk Özdemir + Batuhan Bozkan</span>{"\n"}<span className="a">About</span>{"          "}<span className="b">Gaming, Vlog</span>{"\n"}<span className="a">Active since</span>{"   "}<span className="b">2011 -</span>{"\n"}<span className="a">Youtube URL</span>{"    "}<a className="a1" href="https://www.youtube.com/videoyunrespawn">/videoyunrespawn</a>{"\n"}<span className="a">Youtube old URL</span><a className="a1" href="https://www.youtube.com/videoyun">/videoyun</a>{"\n"}<span className="a">Twitch URL</span>{"     "}<a className="a1" href="https://www.twitch.tv/videoyun">/videoyun</a>{"\n"}<span className="a">Facebook URL</span>{"   "}<a className="a1" href="https://www.facebook.com/Videoyun/">/videoyun</a>{"\n"}<span className="a">Twitter URL</span>{"    "}<a className="a1" href="https://www.twitter.com/videoyuncu">/videoyuncu</a>{"\n"}{"\n"}<span className="a">Channel 2</span>{"      "}berkozdemir{"\n"}<span className="a">About</span>{"          "}<span className="b">Vlog, Art, Music</span>{"\n"}<span className="a">Active since</span>{"   "}<span className="b">2017 -</span>{"\n"}<span className="a">Youtube URL</span>{"    "}<a className="a1" href="https://www.youtube.com/berkozdemir">/berkozdemir</a>{"\n"}{"\n"}{"        "}</pre> */}
                    {/* <pre className="section"><span className="baslik">Past Work</span>{"\n"}{"\n"}<span className="altbaslik">## Sony Playstation Turkey ##</span>{"\n"}<span className="a">Job</span><span className="b">Video content creator for the official Youtube channel</span>{"\n"}<span className="a">Worked Between</span><span className="b">04/2015 - 06/2015</span>{"\n"}{"\n"}{"\n"}<span className="altbaslik">## Baze.TV ##</span>{"\n"}<span className="a">Job</span><span className="b">Streamer</span>{"\n"}<span className="a">Worked Between</span><span className="b">2013-2014</span>{"\n"}{"\n"}{"        "}</pre> */}
                    {/* <pre className="section"><span className="baslik">Links</span>{"\n"}{"\n"}<span className="a">Website</span>{"   "}<a className="a1" href="https://www.berkozdemir.com">https://www.berkozdemir.com</a>{"\n"}<span className="a">Soundcloud</span><a className="a1" href="https://www.soundcloud.com/berk-ozdemir">https://www.soundcloud.com/berk-ozdemir</a>{"\n"}<span className="a">Bandcamp</span>{"  "}<a className="a1" href="https://berkozdemir.bandcamp.com/">https://berkozdemir.bandcamp.com/</a>{"\n"}<span className="a">Youtube</span>{"   "}<a className="a1" href="https://www.youtube.com/berkozdemir">https://www.youtube.com/berkozdemir</a>{"\n"}<span className="a">Twitch</span>{"  "}<a className="a1" href="https://www.twitch.tv/berkozdemir">https://www.twitch.tv/berkozdemir</a>{"\n"}<span className="a">Twitter</span>{"   "}<a className="a1" href="https://www.twitter.com/berkozdemir">https://www.twitter.com/berkozdemir</a>{"\n"}<span className="a">Instagram</span> <a className="a1" href="https://www.instagram.com/benberkozdemir">https://www.instagram.com/benberkozdemir</a>{"\n"}<span className="a">Github</span>{"    "}<a className="a1" href="https://www.github.com/vortextemporum">https://www.github.com/vortextemporum</a>{"\n"}{"\n"}{"        "}</pre> */}
                </div>
                </div>
        
        )
    }




}




export default CV;