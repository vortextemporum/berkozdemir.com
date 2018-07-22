import React, {Component} from 'react';
import { Window, TitleBar} from 'react-desktop/macOs';
import P5Wrapper from "react-p5-wrapper";
import sketch from "../sketches/spinRadios";
import '../css/about.css';

export default class About extends Component {
    
    render() {
        return(
            <div>
            <pre className="tc fw7 f3 lh-title white">{"   "}___{"     "}___{"     "}___{"    "}_{"   "}_{"   "}_____{"  "}{"\n"}{"  "}/{"   "}\{"   "}| _ ){"   "}/ _ \{"  "}| | | | |_{"   "}_| {"\n"}{"  "}| - |{"   "}| _ \{"  "}| (_) | | |_| |{"   "}| |{"   "}{"\n"}{"  "}|_|_|{"   "}|___/{"   "}\___/{"   "}\___/{"   "}_|_|_{"  "}{"\n"}_|"""""|_|"""""|_|"""""|_|"""""|_|"""""| {"\n"}"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-' {"\n"}</pre>
                <div className="flex flex-wrap justify-around items-center">
                    <Window className='ma3'
                chrome
                height="100%"
                width="50%"
                padding="5%"
                
            >
                        <TitleBar title="aboutme1.txt" />
                        <div className='nunito f5'>
                            <p>Hi to everyone who visited my website!</p>

                            <p>My name is Berk Özdemir and I'm a composer, producer, performer, multimedia artist and creative coder born in Amsterdam (NL), raised in Istanbul (TR) and now living in Den Haag (NL).</p>

                            <p>I would refer to myself as a multidisciplinary artist who is interested in doing many things: music, sound design, improvisation, live visuals, videos, web-art, multimedia compositions, installations, creative coding etc.</p>

                            <p>My journey with music started when my father started teaching me piano and music theory when I was 3, after then until university I studied classical piano in conservatories' part time classical piano programmes. Also in elementary school, my parents bought me an audio interface and I started doing stupid tracks with Cubase (and most of them are missing unfortunately), and I was also highly interested in doing basic websites with my basic HTML knowledge. </p>

                            <p>In highschool, I fell in love with synthesizers and keyboards (shoutout to Dream Theater, which was a huge inspiration to me at that time). I spend years playing keyboards in many bands of different genres like rock, blues, funk/soul/RnB, progressive metal etc. I also used to upload lots of cover videos of mostly progressive metal bands, but they're all gone now, because Youtube decided to terminate my channel due to copyright strikes.</p>

                            
                        </div>
                    </Window>
                    <div className='ma4'>
                        <P5Wrapper sketch={sketch}/>
                    </div>
                    <Window className='ma3'
                chrome
                height="100%"
                width="47%"
                padding="3%"
                
            >
                        <TitleBar title="aboutme2.txt" />
                        <div className='nunito f5'>

                        <p>In university,  I studied composition in Mimar Sinan University of Fine Arts, State Conservatory and got my bachelor degree in 2017. Unfortunately, I couldn't be very creative in that period; I only composed around 10 pieces for different combinations of acoustical instruments (solo instruments, ensembles, orchestra), and only 3 of them were performed (in Turkey, Greece and USA).</p>
                        
                        <p>Also in 2011, I founded a Youtube channel about gaming and vlog called "Videoyun" with my childhood buddy Batu Bozkan, and actively created content for it regularly for years, and did livestreams on Twitch. At that time, it became one of the biggest Youtube and Twitch channels in Turkey. I also have a personal Youtube channel called "Berk Özdemir", but I'm rarely uploading content there.</p>
                        
                        <p>I also worked in "Baze.TV" as a streamer in 2014, and Sony Playstation Turkey as video content creator in 2015.</p>
                        
                        
                        </div>
                    </Window>
                    <Window className='ma3'
                chrome
                height="100%"
                width="47%"
                padding="3%"
                
            >
                        <TitleBar title="aboutme3.txt" />
                        <div className='nunito f5'>

                            <p>What I had also noticed when I was doing my bachelor's degree, that I was way more interested in the electronic music as the means of sound world and working medium, so I decided to continue my education studying electroacoustical music. Thus I went to <a href="http://www.sonology.org">Institute of Sonology</a> at the Royal Conservatory of the Hague, and did the "one year course" programme twice. In these 2 years I attended many workshops, built software synthesizers, performed in many free improvisation and noise concerts, composed pieces for multimedia, learnt many programming languages (both music-sound focused frameworks and languages & all purpose languages).</p>

                            <p>Right now I’m doing my Masters degree at ArtScience Interfaculty at Royal Conservatory / Art Academy of the Hague. My focus on the research subject is internet literacy, remix culture, and finding new ways to use browsers and media in internet as an instrument, and audiovisual composition material.</p>

                            <p>I'm also actively producing groove oriented music. I wouldn't limit my tracks towards a single spesific musical genre/style, but I love sampling media content (such as videos, music etc.) as a fuel to find new musical ideas and to create new musical phrases and compositions out of it. Right now, I'm working on my debut album which will consist of beats I produced in this year, and I'm hoping hoping to release it in this year.</p>
                        
                        </div>
                    </Window>

                {/* <Window className='ma3'
                chrome
                height="100%"
                width="50%"
                padding="5%"
                
            >

            </Window> */}
            </div>
        </div>
        )
    }
}
