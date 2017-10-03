  import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 300,
    display: 'flex',
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'all'
  },
  drawer: {
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
    position: 'absolute',
    top: 0,
    display: 'block',
    width: '24rem',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    color: '#424242',
    pointerEvents: 'none',
    backgroundColor: '#000',
    transitionDelay: '0s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: '-webkit-transform',
    transitionProperty: 'transform',
    transitionProperty: 'transform,-webkit-transform',
    transformStyle: 'preserve-3d',
    willChange: 'transform',
    left: 0,
    borderRight: '1px solid #e0e0e0',
    pointerEvents: 'all',
    transform: 'translateX(0)',
    zIndex: 2
  },
  cover: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: '.6',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: 'opacity',
  }
}

const Drawer = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  if(!props.isShow) return null

  return (
    <div style = {[styles.base, ...zcss]}>
      <div style = {[styles.cover, ...zcss]}>
      </div>
      <div style = {[styles.drawer, ...zcss]}>
        {props.children}
      </div>
    </div>

  )
}

Drawer.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Drawer)
