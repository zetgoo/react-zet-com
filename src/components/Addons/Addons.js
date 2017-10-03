import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    boxSizing: 'inherit',
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    position: 'relative',
    textAlign: 'left',
    display: 'flex'
  },
  isCenter: {
    justifyContent: 'center',
  },
  isRight: {
    justifyContent: 'flex-end'
  }
}

const Addons = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <span>
      <p {...props} style={[
          styles.base,
          ...zcss
        ]}>
        {props.children}
      </p>
    </span>
  )
}

Addons.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Addons)
