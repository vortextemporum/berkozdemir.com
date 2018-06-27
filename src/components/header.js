import React, {Component} from 'react';
import { Link } from 'react-router-dom';




class Header extends Component {
    render() {
        return(
        <header className="nunito bg-black-60 ph3 pv3 pv3-ns ph4-m ph5-l flex justify-between items-center">
            <span id='isim' className='white dib f3 fw6 lh-title'>BERK ÖZDEMİR</span>
            <nav  className="f6 fw6 ttu tracked">
                <Link className="link dim white dib mr3" to="/" title="Home">Home</Link> 
                <Link className="link dim white dib mr3" to="/about" title="About">About</Link>
                <Link className="link dim white dib mr3" to="/portfolio" title="Portfolio">Portfolio</Link>
                <Link className="link dim white dib mr3" to="/contact" title="Contact">Contact</Link>
                <Link className="link dim white dib mr3" to="/cv" title="CV">CV</Link>
            </nav>
        </header>
        )
    }
}

const randomColor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

function animateisim(){
    let title = document.getElementById("isim");
    let text = title.innerText;
    let newText = "";
    
    for (let char = 0; char < text.length; char++) {
        let letter = text[char];
        newText += letter.fontcolor(randomColor());
    }
    
    return title.innerHTML = newText;
}

setInterval(animateisim, 400)

export default Header;