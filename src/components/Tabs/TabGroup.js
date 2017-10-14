import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    alignItems: 'center',
    borderBottomColor: '#dbdbdb',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0
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
