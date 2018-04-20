import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class TextBlock extends Component {
  render() {
    return (
      <div className='text-block'>
        <p >{this.props.text}</p>
      </div>
    )
  }
}

TextBlock.propTypes = {
  text: PropTypes.string.isRequired
}