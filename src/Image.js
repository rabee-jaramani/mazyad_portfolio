import React from 'react'

export default class Image extends React.Component {

    render(){
    return (
        <div className='image-container'>
             <img 
             className='image'
             id={this.props.id}
             src={this.props.src} 
             alt={this.props.id}
             onClick={ ()=>{
                this.props.show_image(this.props.src,this.props.info,this.props.image_type)
             }}
            />
        </div>
    )
}
}