import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'
import Sack from '../Sack/Sack'

const FormGroup = (props)=> {
  let zcss = props.zcss || []
  zcss.push('mgB1/2r')

  return (
    <Sack {...props} zcss = {zcss} >
      {props.children}
    </Sack>
  )
}

FormGroup.propTypes = {
  zcss: PropTypes.array
}

export default Radium(FormGroup)
