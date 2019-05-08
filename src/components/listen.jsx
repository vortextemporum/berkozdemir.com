import React, {Component} from 'react';


export default class Listen extends Component {
    render() {
        return (
            <div>
                {/* <h1 className="f2 yatra tc mv4"> <span className="light-red">L</span><span className="light-green">I</span><span className="light-blue">S</span><span className="light-red">T</span><span className="light-green">E</span><span className="light-blue">N</span></h1> */}
                <div id="listencontainer" className="bg-black-70 shadow-4-l b--dashed b--orange w-80 center flex justify-around flex-wrap items-center mt3"> 
                    
                    <iframe className="ma3" style={{border: 0, width: 400 + 'px', height: 300 + 'px'}} src="https://bandcamp.com/EmbeddedPlayer/album=3125905424/size=large/bgcol=333333/linkcol=2ebd35/artwork=small/transparent=true/" seamless><a href="http://berkozdemir.bandcamp.com/album/album-of-things-01">Album of Things #01 by Princess Camel</a></iframe>
                    <iframe className="ma3" style={{border: 0, width: 400 + 'px', height: 300 + 'px'}} src="https://bandcamp.com/EmbeddedPlayer/album=2231919942/size=large/bgcol=333333/linkcol=2ebd35/artwork=small/transparent=true/" seamless><a href="http://berkozdemir.bandcamp.com/album/vedat-chili-peppers">Vedat Chili Peppers by Berk Özdemir</a></iframe>
                    <iframe className="ma3" style={{border: 0, width: 400 + 'px', height: 300 + 'px'}} src="https://bandcamp.com/EmbeddedPlayer/album=4196865636/size=large/bgcol=333333/linkcol=2ebd35/artwork=small/transparent=true/" seamless><a href="http://berkozdemir.bandcamp.com/album/tape-md2eu">tape/md2eu by Berk Özdemir</a></iframe>
                    <iframe className="ma3" src="https://open.spotify.com/embed/user/1124037609/playlist/7Hob3hcgkAM8V3XOObxNtY" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    {/* <iframe className="ma3" width="100%" height="166" width="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/555866766&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> */}
                    <iframe className="ma3" width="50%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5701888&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                    <iframe className="ma3" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLL-JW4H9We1yFMa0IvJqjESOu6ctFvCFB" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                </div>
            </div>
        )
    }
};