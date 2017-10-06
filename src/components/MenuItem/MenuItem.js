  import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    listStyle: 'none',
    textRendering: 'optimizeLegibility',
    color: '#69707a',
    lineHeight: 1.428571428571429,
    fontSize: 14,
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    fontSize: 14,
    fontWeight: 'normal',
    verticalAlign: 'baseline'
  }
}

const MenuItem = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <ul style={[
        styles.base,
        ...zcss
      ]}>
      {props.children}
    </ul>
  )
}

MenuItem.propTypes = {
  zcss: PropTypes.array
}

export default Radium(MenuItem)
