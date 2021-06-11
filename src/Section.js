import React from 'react'


export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: null};
    
  }

   show_image(image){
      this.setState({
        image:image,
        element:'.image-div-full-screen'
      })    
  }
   
    componentDidMount(){
      
    }
    render(){
    return (
       <section id={this.props.section_id} className='section section-body'>
         
        <div className='container'>

          {/* full screen image/// show image */}
        <div className={`image-div-full-screen ${ this.props.fullScreen_div }`}>
          <div
            className='close' 
            onClick={()=>document.querySelector('.'+this.props.fullScreen_div).style.display='none'}>
              close-X
          </div>
           <img src={this.state.image} alt={this.props.section_id}/>
        </div>


          <div className='section-title'>{this.props.section_name}</div>
          <div className='grid-images'>
            <img 
             className='image-grid image-grid1'
             id={this.props.images[0].image_id}
             src={this.props.images[0].image_src} 
             alt={this.props.images[0].image_id}
             onClick={()=>{
               this.show_image(this.props.images[0].image_src)
               document.querySelector('.'+this.props.fullScreen_div).style.display='block'
            }}
            />
               
            <img 
             className='image-grid image-grid2'
             id={this.props.images[1].image_id}
             src={this.props.images[1].image_src} 
             alt={this.props.images[1].image_id}
             onClick={()=>{
              this.show_image(this.props.images[1].image_src)
              document.querySelector('.'+this.props.fullScreen_div).style.display='block'
           }}
            />
            <img 
             className='image-grid image-grid3'
             id={this.props.images[2].image_id}
             src={this.props.images[2].image_src} 
             alt={this.props.images[2].image_id}
             onClick={()=>{
              this.show_image(this.props.images[2].image_src)
              document.querySelector('.'+this.props.fullScreen_div).style.display='block'
           }}
            />
            <img 
             className='image-grid image-grid4'
             id={this.props.images[3].image_id}
             src={this.props.images[3].image_src} 
             alt={this.props.images[3].image_id}
             onClick={()=>{
              this.show_image(this.props.images[3].image_src)
              document.querySelector('.'+this.props.fullScreen_div).style.display='block'
           }}
            />
          </div>
        </div>
      </section>
    )
}
}