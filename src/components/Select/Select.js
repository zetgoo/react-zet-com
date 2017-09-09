import React, {Component} from 'react'
import SelectLib from 'react-select'
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
    fontSize: '1rem',
    height: '2.25em',
    justifyContent: 'flex-start',
    lineHeight: 1.5,
    position: 'relative',
    verticalAlign: 'top',
    touchCallout: 'none',
    userSelect: 'none',
    backgroundColor: 'white',
    borderColor: '#dbdbdb',
    color: colors.no,
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

const Select = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <SelectLib
      name="form-field-name"
      {...props}
    />
  )
}

Select.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Select)
