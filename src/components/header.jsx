import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../css/header.css"




class Header extends Component {
    render() {
        return(
        <header className="bg-black-80 flex flex-wrap justify-around ph2 pv2 pv3-ns ph4-m ">
            {/* <span id='isim' className='pressstart2p f2 fw6 lh-title'>berkozdemir.com</span> */}
            <nav  className="nunito center tc f4 fw6 ttu tracked">
                <Link id="headerlink" className="link dim blue dib pa2"  to="/" title="Home">Home</Link> 
                <Link id="headerlink" className="link dim red dib pa2"  to="/about" title="About">About</Link>
                {/* <Link id="headerlink" className="link dim light-purple dib mr3"  to="/news" title="News">News</Link> */}
                <Link id="headerlink" className="link dim light-blue dib pa2"  to="/listen" title="News">Listen</Link>
                <Link id="headerlink" className="link dim light-purple dib pa2"  to="/piyscores" title="PIYScores">P.I.Y. Scores</Link>
                <Link id="headerlink" className="link dim orange dib pa2"  to="/works" title="Works">Things I Did</Link>
                <Link id="headerlink" className="link dim yellow dib pa2"  to="/contact" title="Contact">Contact</Link>
                <a id="headerlink" target="_blank" className="link dim neon-green dib pa2"  href="https://steemit.com/@princesscamel">Blog</a>
                <Link id="headerlink" className="link dim dark-pink dib pa2"  to="/cv" title="CV">Resume-ish (outdated)</Link>
            </nav>
        </header>
        )
    }
}

export default Header;