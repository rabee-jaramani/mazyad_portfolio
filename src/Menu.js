import React from 'react'

export default function Menu() {
    return (
        <div className='menu'>
            <div className='audio'>
                <i className="fas fa-volume-up"></i>
                <i className="hide-D fas fa-volume-mute"></i>
            </div>
            <div className='download-cv'>
                <i class="fas fa-download"></i>CV
            </div>
        </div>
    )
}
