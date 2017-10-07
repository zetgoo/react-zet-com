import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    whiteSpace: 'nowrap',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft:10,
    position: 'relative',
    margin: 0,
    marginBottom: 5,
    color: '#4b646f',
    background: '#1a2226',
    overflow: 'hidden',
    textOverflow: 'clip',
  }
}

const MenuLabel = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <p style={[
        styles.base,
        ...zcss
      ]}>
      {props.children}
    </p>
  )
}

MenuLabel.propTypes = {
  zcss: PropTypes.array
}

export default Radium(MenuLabel)
