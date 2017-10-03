import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    appearance: 'none',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
    boxShadow: 'none',
    display: 'inline-flex',
    fontSize: '0.875em',
    height: '2.25em',
    justifyContent: 'flex-start',
    lineHeight: 1.5,
    position: 'relative',
    verticalAlign: 'top',
    touchCallout: 'none',
    userSelect: 'none',
    backgroundColor: 'white',
    borderColor: '#dbdbdb',
    color: '#222324',
    cursor: 'pointer',
    justifyContent: 'center',
    paddingLeft: '0.75em',
    paddingRight: '0.75em',
    textAlign: 'center',
    whiteSpace: 'nowrap',
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
    backgroundColor: colors.disable,
    pointerEvents: 'none',
    cursor: 'default'
  },
  info: {
    backgroundColor: colors.info
  },
  warning: {
    backgroundColor: colors.warning
  },
  danger: {
    background: colors.danger
  },
  cancel: {
    background: colors.cancel
  },
  white: {
    backgroundColor: colors.no,
    borderColor: 'transparent',
    color: '#111',
    ':hover': {
      backgroundColor: '#e6e6e6',
      borderColor: 'transparent',
      color: '#111'
    },
    ':focus': {
      backgroundColor: '#e6e6e6',
      borderColor: 'transparent',
      color: '#111'
    }
  },
  light:{
    backgroundColor: '#f5f7fa',
    borderColor: 'transparent',
    color: '#69707a',
    ':hover': {
      backgroundColor: '#d3dce9',
      borderColor: 'transparent',
      color: '#69707a'
    },
    ':focus': {
      backgroundColor: '#d3dce9',
      borderColor: 'transparent',
      color: '#69707a'
    }
  },
  black:{
    backgroundColor: '#111',
    borderColor: 'transparent',
    color: '#fff',
    ':hover': {
      backgroundColor: '#000',
      borderColor: 'transparent',
      color: '#fff'
    },
    ':focus': {
      backgroundColor: '#000',
      borderColor: 'transparent',
      color: '#fff'
    }
  },


  isLink: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: '#69707a',
    textDecoration: 'underline',
    ':hover': {
      backgroundColor: '#d3d6db',
      color: '#222324'
    },
    ':focus': {
      backgroundColor: '#d3d6db',
      color: '#222324'
    }
  },
  isLoading: {
    color: 'transparent',
    pointerEvents: 'none',
    ':after': {
      animation: 'spinAround 500ms infinite linear',
      border: '2px solid #dbdbdb',
      borderRadius: '290486px',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      content: 'hjghjg',
      display: 'block',
      height: '1em',
      width: '1em',
      left: 2,
      top: 2,
      position: 'absolute'
    }
  }
}

const Button = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <button {...props} style={[
        styles.base,
        ...zcss
      ]}
      >{props.children}</button>
  )
}

Button.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Button)
