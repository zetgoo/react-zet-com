import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
  }
}

const Checkbox = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <input type='radio' {...props} style={[
      styles.base,
      ...zcss
    ]}
    />
  )
}

Checkbox.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Checkbox)
