import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 3,
    color: '#4a4a4a',
    display: 'inline-flex',
    fontSize: '0.75rem',
    height: '2em',
    justifyContent: 'center',
    lineHeight: 1.5,
    paddingLeft: '0.75em',
    paddingRight: '0.75em',
    whiteSpace: 'nowrap'
  },
  button: {
    height: 16,
    maxHeight: 16,
    maxWidth: 16,
    minHeight: 16,
    minWidth: 16,
    width: 16,
    marginLeft: '0.25em',
    marginLight: '-0.375em'
  },
  primary: {
    backgroundColor: colors.primary,
    borderColor: 'transparent',
    color: '#fff',
    ':hover':{
      backgroundColor: '#00c4a7',
      borderColor: 'transparent',
      color: '#fff'
    },
    ':active': {
      backgroundColor: '#00b89c',
      borderColor: 'transparent',
      boxShadow: 'inset 0 1px 2px rgba(10, 10, 10, 0.2)',
      color: '#fff'
    }
  },
  success: {
    backgroundColor: colors.success
  },
  disable: {
    backgroundColor: colors.disable
  },
  info: {
    backgroundColor: colors.info
  },
  warning: {
    backgroundColor: colors.warning
  },
  danger: {
    background: colors.danger
  }
}

const Tag = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <span style = {[styles.base, ...zcss]}>
      {props.text}
      <button className = 'fa fa-remove' style = {[styles.button]} onClick = {props.onClick}/>
    </span>
  )
}

Tag.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Tag)
