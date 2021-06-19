import React from 'react'
import Image from './Image'

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_selected: this.props.images[0].image_src,
      image_info:this.props.images[0].image_info
    };
    
  }

   show_image(image, info,type){
     console.log(this.props.fullScreen_div)
     if(type!=='portrait'){
      document.querySelector(`.${this.props.fullScreen_div}`).classList.remove('portrait')   
    }
    else{
          document.querySelector(`.${this.props.fullScreen_div}`).classList.add('portrait')
    }
    this.setState({
      image_selected:image,
      image_info:info,
      element:'.image-div-full-screen'
    }) 
  }
   
    componentDidMount(){
      
    }
    render(){
    return (
       <section id={this.props.section_id} className='section section-body'>
         
        <div className='container'>
        <div className='section-title'>{this.props.section_name}</div>
        <div className='info-div'>
          <p className='info-p'>{this.state.image_info}</p>
        </div>


          {/* full screen image/// show image */}
        <div className={`image-div-full-screen ${ this.props.fullScreen_div }`}>
           <img src={this.state.image_selected} alt={this.props.section_id}/>
        </div>


          <div className='flex-images'>
          {
              this.props.images.map((elem)=>{
                return <Image
                        id={elem.image_id}
                        key={elem.image_id}
                        src={elem.image_src}
                        alt={elem.image_id}
                        info={elem.image_info}
                        fullScreen_div={this.props.fullScreen_div}
                        image_type={elem.image_type}
                        show_image={this.show_image.bind(this)}
                      />
              })
          }
          </div>
        </div>
      </section>
    )
}
}