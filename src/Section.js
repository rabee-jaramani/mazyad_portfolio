import React from 'react'


export default class Section extends React.Component {

    componentDidMount(){

    }

    render(){
    return (
       <section id={this.props.sec_id} className='section section-body'>
        <div className='container'>
          <div className='section-title'>Section Title</div>
          <div className='grid-images'>
            <img className='image-grid image-grid1' src={this.props.images_list[0].image} alt={this.props.images_list[0].id}></img>
            <img className='image-grid image-grid2' src={this.props.images_list[1].image} alt={this.props.images_list[0].id}></img>
            <img className='image-grid image-grid3' src={this.props.images_list[2].image} alt={this.props.images_list[0].id}></img>
            <img className='image-grid image-grid4' src={this.props.images_list[3].image} alt={this.props.images_list[0].id}></img>
          </div>
        </div>
      </section>
    )
}
}