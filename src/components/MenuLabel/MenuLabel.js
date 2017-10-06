import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    color: '#aeb1b5',
    fontSize: 11,
    letterSpacing: 1,
    marginBottom: 5,
    textTransform: 'uppercase',
    textRendering: 'optimizeLegibility',
    lineHeight: 1.428571428571429,
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
  }
}

const MenuLabel = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <p style={[
        styles.base,
        ...zcss
      ]}>
      {props.children}
    </p>
  )
}

MenuLabel.propTypes = {
  zcss: PropTypes.array
}

export default Radium(MenuLabel)
