import React, { Component } from 'react'
import image from './image.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={image} alt='loading' />
            </div>
        )
    }
}

export default Spinner
