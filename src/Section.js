import React from 'react'
import Image from './Image'

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image_selected: this.props.images[0].image_src};
    
  }

   show_image(image){
     console.log(image)
      this.setState({
        image_selected:image,
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
                        fullScreen_div={this.props.fullScreen_div}
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