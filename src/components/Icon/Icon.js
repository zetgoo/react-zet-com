import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    // fontSize: '0.875em'
  },
  icon: {
  },
  text: {
    marginLeft: 5,
  }
}

const Icon = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <span style = {[styles.base, ...zcss]}>
      <i className={props.icon} style = {[styles.icon, ...zcss]}></i>
      {props.text && props.text.length !== 0 && <span style = {styles.text}>{props.text}</span>}
    </span>
  )
}

Icon.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Icon)
