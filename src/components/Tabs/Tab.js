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

  return (
    <li style = {{display: 'block'}}>
      <span className = {props.icon} style = {[styles.base, ...zcss]}>
        {props.children}
      </span>
    </li>
  )
}

Tab.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Tab)
