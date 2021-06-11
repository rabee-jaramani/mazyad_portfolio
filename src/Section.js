import React from 'react'


export default class Section extends React.Component {

    componentDidMount(){
    }

    render(){
    return (
       <section id={this.props.section_id} className='section section-body'>
         {console.log('section name: '+this.props.section_name)}
         {console.log('images: '+ this.props.images[0].image_src)}
         
        <div className='container'>
          <div className='section-title'>{this.props.section_name}</div>
          <div className='grid-images'>
            <img 
             className='image-grid image-grid1'
             id={this.props.images[0].image_id}
             src={this.props.images[0].image_src} 
             alt={this.props.images[0].image_id}
            />
            <img 
             className='image-grid image-grid2'
             id={this.props.images[1].image_id}
             src={this.props.images[1].image_src} 
             alt={this.props.images[1].image_id}
            />
            <img 
             className='image-grid image-grid3'
             id={this.props.images[2].image_id}
             src={this.props.images[2].image_src} 
             alt={this.props.images[2].image_id}
            />
            <img 
             className='image-grid image-grid4'
             id={this.props.images[3].image_id}
             src={this.props.images[3].image_src} 
             alt={this.props.images[3].image_id}
            />
          </div>
        </div>
      </section>
    )
}
}