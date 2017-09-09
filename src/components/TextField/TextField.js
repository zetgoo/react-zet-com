import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import Input from '../Input/Input'
import Label from '../Label/Label'
import Icon from '../Icon/Icon'

import {colors,atomic} from '../constant'

const styles = {
  base: {
    display: 'flex',
    alignItems: 'center'
  },
  help: {
    fontSize: '0.875em',
    fontStyle: 'italic',
    display: 'block'

  }
}

const TextField = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }
  return (
    <div>
      <Label>{props.label}</Label>
      <span style={[styles.help]}>
        {props.help}
      </span>
      <div style = {[styles.base]}>
        <Input disabled = {props.disabled} 
          zcss = {[`${props.errors ? 'error' : ''}`, `${props.disabled ? 'disabled' : ''}`]} placeholder = 'zetgoo' value = {props.value}
          onChange = {props.onChange} placeholder = {props.placeholder} type = {props.type}/>
        {props.errors && <Icon zcss = {['cl_danger', 'mg1/2e']} icon = 'fa fa-exclamation-circle'/>}
        {props.valid && <Icon zcss = {['cl_success', 'mg1/2e']} icon = 'fa fa-check-circle'/>}
      </div>
      {props.errors && props.errors.map((item,index)=>
        <span style={[styles.help]}>
          {item.text}
        </span>
      )}
    </div>
    )
  }

  TextField.propTypes = {
  }

  export default Radium(TextField)
