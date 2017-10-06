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
    verticalAlign: 'top',
    display: 'inline-block',
    position: 'relative'
  },

  image: {
    display: 'block',
    height: '100%',
    width: '100%'
  },

  isCircle: {
    borderRadius: '50%'
  },

  isAvatar: {
    '@media (max-width: 575px)':{
      height: 32,
      width: 32
    }
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
        {maxWidth: props.width, height: (props.width / props.ratio)}
      ]}
      >
      <img style = {[styles.image, ...zcss]} src={props.src} alt={props.alt} />
    </figure>
  )
}

Image.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Image)
