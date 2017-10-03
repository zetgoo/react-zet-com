  import React, {Component} from 'react'
import Radium from 'radium'
import ToggleLib from 'react-toggle'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    textRendering: 'optimizeLegibility',
    color: '#69707a',
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    display: 'flex',
    flex: 1,
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    justifyContent: 'flex-start'
  },
  menu: {
    '@media (max-width: 575px)':{
      display: 'block',
      position: 'absolute',
      backgroundColor: '#fff',
      left: 0,
      right: 0,
      top: '100%'
    }
  },
  menuHide: {
    '@media (max-width: 575px)':{
      display: 'none'
    }
  },
  logo: {
    '@media (max-width: 575px)':{
      justifyContent: 'center'
    }
  },
  icon: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}

const NavGroup = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <div style = {[styles.base, ...zcss]}>
      {props.children}
    </div>
  )
}

NavGroup.propTypes = {
  zcss: PropTypes.array
}

export default Radium(NavGroup)
