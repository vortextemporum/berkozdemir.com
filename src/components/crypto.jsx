import React, {Component} from 'react';
import rareberkpic from "./images/RareBERKgallery.png"

export default class CryptoThings extends Component {
    render() {
        
        return (
            <div className="">

                <div className="code w-90 bg-white-60 b--dashed b--orange mt3 pa1 ph5 center near-black">
                    <h1 className="tc red fw9">CRYPTO THINGS</h1>
                
                    <p> 
                        I feel like I was a little bit late to catch up with blockchain trend. But better later than never, right?
                    </p>   
                    <p>
                        In the beginning of 2019, I dove into blockchain systems and decentralized networks.
                    </p>  
                    <p>    
                       Since then, I worked with 
                    </p>
                    <p>

                    </p>




                    <h3>d number</h3>
                    <p>d number is the first smart contract I have written on Ethereum network. 
                        
                        Collection of tokens in d number represents a decimal number between [0,10).
                        
                        Each new ERC721 token generated in this contract adds a new decimal place to d number. As new tokens are generated, the value of the number changes.

                        There is a script with generates a unique metadata image for each token, based on token data (last digit, digit history, level, id). Each digit value change on a token generates a new image with new parameters.

                        To get your first dPlace, go to <a href="https://dnum.xyz">https://dnum.xyz</a>

                        d number marketplace on <a href="open">OpenSea</a>. 
                        
                        
                    </p>
                    
                    
                    
                    <h3 className="">RareBERK CryptoVoxels gallery</h3> 
                        <p>
                            &gt; This is my one and only land in Cryptovoxels, which is in the Punks district.
                        </p>
                        <p>
                            &gt; I decided to use it as a personal gallery, so I started filling it with images, nfts, music, 3d objects I have. 
                        </p>   
                        
                        <p>
                            &gt; I keep updating my build on parcel by putting more content; so you may see new things next time you visit. It's getting more packed and weird with new additions, but making weird looking stuff by playing html ui parameters is hella fun I should say.
                        </p> 

                        
                    <div className="center">
                        <img src={rareberkpic} alt="RareBERK Cryptovoxels gallery"></img>
                        <a className="f3 tc link red " href="https://www.cryptovoxels.com/parcels/2477">GO GO GO SEE SEE SEE</a>
                    

                    </div>  


                    <p>
                        <a href="https://opensea.io/accounts/0xc5e08104c19dafd00fe40737490da9552db5bfe5">Opensea</a> 
                        <a className="red" href="https://dapp.knownorigin.io/artists/0xc5E08104c19DAfd00Fe40737490Da9552Db5bfE5">KnownOrigin</a>
                        <a href="https://app.rarible.com/pc">Rarible (PCæmæl Collection)</a>
                        <a href="https://app.rarible.com/berk">Rarible (berk)</a>
                        <a href="">SuperRare</a>
                        <a href="">Opensea</a>
                        </p>

                </div>
                

                HEY. I would never say no to nft gifts or cryptocurrency donation. 
                
                Ether and other ERC20 tokens:
                Bitcoin:
                


            </div>
        )

    }
}