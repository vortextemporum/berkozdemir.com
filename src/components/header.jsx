import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../css/header.css"




class Header extends Component {
    render() {
        return(
        <header className="bg-black-80 flex flex-wrap justify-around ph2 pv2 pv3-ns ph4-m ">
            {/* <span id='isim' className='pressstart2p f2 fw6 lh-title'>berkozdemir.com</span> */}
            <nav  className="pressstart2p center tc f5 fw6 ttu tracked">
            {/* <nav  className="nunito center tc f4 fw6 ttu tracked"> */}
                <Link id="headerlink" className="link dim blue dib pa3"  to="/" title="Home">HOME</Link> 
                <Link id="headerlink" className="link dim red dib pa3"  to="/about" title="About">ABOUT</Link>
                <Link id="headerlink" className="link dim light-green dib pa3"  to="/about" title="About">d number</Link>
                <a id="headerlink" className="link dim yellow dib pa3"  href="https://open.spotify.com/artist/6yf9s1or7JbsJJ3dOJ6tjf?si=nXEdyl8eQLqB7Q_XstLykQ" title="News">Princess Camel</a>
                <Link id="headerlink" className="link dim light-purple dib pa3"  to="/cryptothings" title="News">crypto/P2P/blockchain</Link>
                <Link id="headerlink" className="link dim green dib pa3"  to="/cryptothings" title="News">RAREBERK VR GALLERY</Link>
                {/* <Link id="headerlink" className="link dim light-purple dib pa2"  to="/piyscores" title="PIYScores">P.I.Y. Scores</Link> */}
                <Link id="headerlink" className="link dim orange dib pa3"  to="/works" title="Works">Things-I-Did (Portfolio)</Link>
                <Link id="headerlink" className="link dim light-blue dib pa3"  to="/listen" title="News">Listen</Link>
                <a id="headerlink" className="link dim red dib pa2" href="" title="Support">ALBUM OF THINGS #01</a>
                <Link id="headerlink" className="link dim orange dib pa3"  to="/support" title="Support">SUPPORT</Link>
                <Link id="headerlink" className="link dim yellow dib pa3"  to="/contact" title="Contact">Contact</Link>
                {/* <a id="headerlink" target="_blank" className="link dim neon-green dib pa2"  href="https://steemit.com/@princesscamel">Blog</a> */}
                <Link id="headerlink" className="link dim dark-pink dib pa3"  to="/cv" title="CV">very short cv</Link>
            </nav>
        </header>
        )
    }
}

export default Header;