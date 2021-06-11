import gsap from 'gsap/gsap-core'
import React from 'react'
import music from './music/music.mp3'
import CV from './CV/MAZYAD_ALJARAMANI_2021.pdf'

export default class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state={musin_on:false}
    }
    

    play_sound(){
        const audioEl = document.getElementsByClassName("audio-element")[0]
        if(this.state.musin_on){
            audioEl.pause()
            this.setState({
                musin_on:false
            })
        }
        else{
            audioEl.play()
            this.setState({
                musin_on:true
            })
        }
       
        document.querySelector('.volume').classList.toggle('fa-volume-up')
        document.querySelector('.volume').classList.toggle('fa-volume-mute')

    }
componentDidMount(){
    gsap.from('.audio',{marginLeft:'-100vw',delay:1})
    gsap.from('.download-cv',{marginLeft:'200vw',delay:1})
    
}
render(){
    return (
        <div className='menu'>
            <audio className="audio-element" autoPlay={true} muted={false}>
                <source src={music}></source>
            </audio>
            <div className='audio' onClick={()=>this.play_sound()}>
                <i className="volume fas fa-volume-mute"></i>
            </div>
            <div className='download-cv'>
                <a href={CV} download>CV</a>
            </div>
        </div>
    )
}
}