import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    alignItems: 'center',
    borderBottom: '1px solid #d3d6db',
    color: '#69707a',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: -1,
    padding: '6px 12px',
    verticalAlign: 'top'
  },
  isActived: {
    color: colors.success,
    borderColor: colors.success
  },
  disabled: {
    opacity: .2
  }
}

const Tab = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  const onActive = (e) =>{
    props.onActive()
  }

  return (
    <label {...props} style = {{display: 'flex', width: '20%'}}>{props.label}</label>
  )
}

Tab.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Tab)
