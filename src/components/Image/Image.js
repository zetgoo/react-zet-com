import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    textRendering: 'optimizeLegibility',
    color: '#69707a',
    fontSize: 14,
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    display: 'block',
    position: 'relative'
  }
}

const Image = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <figure {...props} style={[
        styles.base,
        ...zcss
      ]}
      >
      <img src={this.props.src} alt={this.props.alt} />
    </figure>
  )
}

Image.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Image)
