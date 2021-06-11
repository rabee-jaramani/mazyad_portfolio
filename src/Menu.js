import gsap from 'gsap/gsap-core'
import React from 'react'
import music from './music/music.mp3'

export default class Menu extends React.Component {

componentDidMount(){
    gsap.from('.audio',{marginLeft:'-100vw',delay:1})
    gsap.from('.download-cv',{marginLeft:'200vw',delay:1})
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
}

render(){
    return (
        <div className='menu'>
            <audio className="audio-element">
                <source src={music}></source>
            </audio>
            <div className='audio'>
                <i className="fas fa-volume-up"></i>
                <i className="hide-D fas fa-volume-mute"></i>
            </div>
            <div className='download-cv'>
                <p>CV</p>
            </div>
        </div>
    )
}
}