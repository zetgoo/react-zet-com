import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    alignItems: 'center',
    borderBottom: '1px solid #d3d6db',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    backgroundColor: 'transparent',
    userSelect: 'none',
  }
}

const TabGroup = (props)=> {
let zcss = []
if (props.zcss && Array.isArray(props.zcss)){
  props.zcss.map((item, index) => {
    zcss.push(styles[item])
    zcss.push(atomic[item])
  })
}

return (
  <ul style = {[styles.base, ...zcss]}>
    {props.children}
  </ul>
)
}

TabGroup.propTypes = {
  zcss: PropTypes.array
}

export default Radium(TabGroup)
