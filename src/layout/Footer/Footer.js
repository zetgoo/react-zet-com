import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../../components/constant'

const Footer = ()=> {
  const styles = {
    base: {
      backgroundColor: '#fff'
    }
  }

  return (
    <footer>
      <h1>welcome to zetgo</h1>
    </footer>
  )
}

Footer.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Footer)
