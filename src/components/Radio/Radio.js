import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    color: '#69707a',
    fontSize: '.875em',
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: '1em',
    position: 'relative',
    verticalAlign: 'top',
    margin: 0,
    padding: 0
  },
  control:{
    verticalAlign: 'middle',
    margin: 0
  },
  label:{
    margin: '0 .5em'
  }

}

const Radio = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <label style = {styles.base}>
      <input type='radio' {...props} style={[
        styles.control,
        ...zcss
      ]}/>
    <span style={styles.label}>{props.label}</span>
  </label>
  )
}

Radio.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Radio)
