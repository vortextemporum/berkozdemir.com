import React, {Component} from 'react';
class Footer extends Component {
    render() {
        return(
            <div className='nunito flex justify-center'>
                <footer id='social' className="w-auto br4 pv3 ph2 flex align-center flex-wrap">
                    <span className='flex self-center'> Follow me on: </span>
                    
                    {/* <a className="link near-black hover-dark-blue dib mh3 mv2 tc grow-large" href="https://facebook.com/berk.ozd" title="Facebook">
                        <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fillRule="nonzero"/></svg>
                        <span className="f6 db fw9">krebozdemir</span>
                    </a> */}
                    <a className="link near-black hover-silver dib mh3 mv2 tc grow-large" href="https://github.com/vortextemporum" title="GitHub">
                        <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                        <span className="f6 db fw9">vortextemporum</span>
                    </a>
                    <a className="link hover-purple near-black dib mh3 mv2 tc grow-large" href="https://instagram.com/benberkozdemir" title="Instagram">
                        <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
                        <span className="f6 db fw9">benberkozdemir</span>
                    </a>
                    <a className="link hover-dark-red near-black dib mv2 mh3 tc grow-large" href="https://youtube.com/berkozdemir" title="youtube">
                        <svg className="dib w2 h2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z"/></svg>
                        <span className="f6 db fw9">berkozdemir</span>
                    </a>
                    <a className="link hover-orange near-black dib mv2 mh3 tc grow-large" href="https://soundcloud.com/berk-ozdemir" title="SoundCloud">
                        <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><g fillRule="nonzero"><path d="M.773 8.13c-.034 0-.062.03-.067.066L.55 9.633l.156 1.405c.005.038.033.065.067.065.033 0 .06-.027.066-.065l.178-1.405-.18-1.437C.835 8.158.807 8.13.774 8.13M.18 8.682c-.032 0-.06.025-.063.062L0 9.634l.117.872c.004.037.03.063.064.063s.06-.027.065-.063l.14-.874-.14-.89c-.005-.036-.03-.06-.064-.06M1.4 7.85c-.04 0-.075.033-.08.078l-.148 1.705.15 1.643c.003.045.037.078.08.078.04 0 .074-.033.08-.078l.17-1.643-.17-1.705c-.006-.045-.04-.078-.08-.078M2.035 7.79c-.05 0-.09.04-.094.092l-.14 1.75.14 1.696c.005.052.045.092.095.092s.09-.04.094-.092l.16-1.695-.16-1.752c-.006-.05-.046-.09-.095-.09M2.78 11.342zM2.78 8.008c-.003-.06-.05-.106-.106-.106-.058 0-.104.046-.108.107l-.133 1.623.133 1.71c.004.06.05.105.108.105.057 0 .103-.046.107-.106l.152-1.71-.15-1.624zM3.318 6.87c-.065 0-.118.053-.12.12L3.07 9.634l.125 1.71c.003.065.056.118.12.118.065 0 .118-.053.122-.12l.14-1.708-.14-2.644c-.005-.067-.058-.12-.122-.12M3.957 6.262c-.072 0-.132.058-.135.133l-.117 3.248.117 1.698c.003.076.063.134.135.134.072 0 .13-.058.135-.133v.002l.132-1.7-.132-3.247c-.004-.075-.063-.133-.135-.133M4.62 5.968c-.08 0-.144.065-.147.148l-.11 3.52.11 1.68c.003.08.068.146.148.146.08 0 .146-.065.15-.147l.123-1.68-.123-3.52c-.004-.082-.07-.147-.15-.147M5.443 5.997c-.003-.09-.074-.16-.162-.16-.088 0-.16.07-.16.16l-.102 3.638.1 1.67c.003.09.074.16.163.16.09 0 .16-.07.163-.16l.113-1.67-.113-3.638zM5.443 11.304zM5.945 5.915c-.096 0-.173.077-.175.175l-.093 3.545.093 1.654c.002.096.08.173.175.173.096 0 .174-.077.176-.175v.002l.105-1.655L6.12 6.09c0-.098-.08-.175-.175-.175M6.615 6.03c-.104 0-.187.084-.19.19l-.084 3.416.086 1.643c.002.104.085.186.19.186.103 0 .186-.082.19-.188l.093-1.642-.095-3.416c-.003-.106-.086-.19-.19-.19M7.402 5.403c-.032-.02-.07-.034-.112-.034-.04 0-.078.01-.11.032-.054.036-.092.098-.093.17v.038L7.01 9.635l.077 1.634v.006c.003.045.02.087.048.12.037.045.093.074.155.074.055 0 .106-.023.142-.06.037-.036.06-.087.06-.142l.01-.162.077-1.47-.087-4.065c0-.07-.037-.13-.09-.167M7.493 11.27v-.002zM8.072 5.018c-.032-.02-.07-.03-.11-.03-.05 0-.1.017-.137.048-.048.04-.08.1-.08.167v.022l-.09 4.41.047.817.043.793c.002.118.1.215.217.215.118 0 .215-.097.217-.216v.002l.095-1.61-.096-4.433c-.002-.08-.045-.147-.108-.185M14.032 7.538c-.27 0-.527.055-.76.153-.158-1.773-1.645-3.164-3.46-3.164-.443 0-.876.087-1.258.235-.15.06-.188.117-.19.232v6.246c.002.12.095.215.213.226h5.455c1.087 0 1.968-.87 1.968-1.958 0-1.087-.88-1.968-1.968-1.968"/></g></svg>
                        <span className="f6 db fw9">berk-ozdemir</span>
                    </a>
                    <a className="link hover-blue near-black dib mv2 mh3 tc grow-large" href="https://twitter.com/berkozdemir" title="Twitter">
                        <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"/></svg>
                        <span className="f6 db fw9">berkozdemir</span>
                    </a>
                    <a className="link hover-green near-black dib mv2 mh3 tc grow-large" href="https://open.spotify.com/artist/0nmnn2zKrNwEH0qEyKCLEf" title="Twitter">
                        <svg  className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 168" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"/></svg>
                        <span className="f6 db fw9">berkozdemir</span>
                    </a>
                    <a className="link hover-green near-black dib mv2 mh3 tc grow-large" href="https://berkozdemir.bandcamp.com/" title="Twitter">

                        <svg className="dib " xmlns="http://www.w3.org/2000/svg" height="32px" fill="currentColor" viewBox="0 0 840.41333 275.17334" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M551.22265289 103.18266763c-35.06533246 0-52.98266535 27.59999931-52.98266535 69.1761316 0 39.30253236 19.37466619 68.80253162 52.98266535 68.80253162 38.00666571 0 52.25733202-34.78013246 52.25733202-68.80253161-.02666666-35.52279911-17.93466622-69.1761316-52.26799869-69.1761316M458.04932188-.00266313h41.65199896v99.78266417h.73733332c11.32799971-18.8946662 35.07466579-30.61599923 56.27066526-30.61599923 59.5519985 0 88.42666445 46.88533216 88.42666445 103.96666406 0 52.52293202-25.5733327 102.04266412-81.4893313 102.04266412-25.57599936 0-52.981332-6.4135465-65.41199836-32.1239992h-.72133331v26.85055933h-39.46799902V.00267021l.004-.00533333M798.7586467 139.86133338c-3.29199992-23.81466607-20.0959995-36.67466575-43.11733226-36.67466575-21.56799946 0-51.89066537 11.72399971-51.89066537 71.07053156 0 32.51093252 13.87999966 66.91613166 50.06266542 66.91613166 24.1119994 0 40.9133323-16.65306625 44.9453322-44.62653222h41.65066563C832.73197918 247.19879737 802.41197994 275.17333 753.8133145 275.17333c-59.19866519 0-91.7159977-43.46146558-91.7159977-100.91613081 0-58.9638652 31.05999921-105.08119737 93.177331-105.08119737 43.84533223 0 81.12666463 22.67733276 85.13466453 70.68533156H798.7586467" fill="#201d1c"/><path d="M312.42132552 269.31082348H0L145.89466302-.00266312h312.42532552l-145.89866302 269.3134866" /></svg>
                        <span className="f6 db fw9">berkozdemir</span>
                    </a>
                </footer>
            </div>
       )
    }
}

export default Footer;
