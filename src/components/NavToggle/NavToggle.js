import React, {Component} from 'react'
import Radium from 'radium'
import ToggleLib from 'react-toggle'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'
import Icon from '../Icon/Icon'

const styles = {
  base: {
    outline: 0,
    boxShadow: 'none',
    padding: '5px 8px',
    lineHeight: 1,
    background: 'transparent',
    border: 0,
    borderRadius: 5,
    margin: 0,
    display: 'none',
    '@media (max-width: 575px)':{
      display:'flex',
      flex: 1,
    }
  }
}

const NavToggle = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <button style = {[styles.base]} onClick = {props.toggle}>
      {!props.isActive && <Icon zcss = {['cl_success']} icon = 'fa fa-bars'/>}
      {props.isActive && <Icon zcss = {['cl_disable']} icon = 'fa fa-times'/>}
    </button>
  )
}

NavToggle.propTypes = {
  zcss: PropTypes.array
}

export default Radium(NavToggle)
