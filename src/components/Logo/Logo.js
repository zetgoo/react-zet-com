import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    textRendering: 'optimizeLegibility',
    color: '#69707a',
    fontSize: 14,
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    display: 'block',
    position: 'relative',
    height: 60,
    width: 60,
    '@media (max-width: 575px)':{
      height: 45,
      width: 45
    }
  },
  logo: {
    display: 'block',
    backgroundSize: '60px 60px',
    height: '100%',
    width: '100%',
    boxShadow:'none',
    backgroundRepeat: 'no-repeat',
    '@media (max-width: 575px)':{
      backgroundSize: '45px 45px',
    }
  }
}

const Logo = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <figure {...props} style={[
        styles.base,
        ...zcss
      ]}
      >
      <img  src = 'http://zetgoo.com/images/glogo.png' style={[styles.logo]}/>
    </figure>
  )
}

Logo.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Logo)
