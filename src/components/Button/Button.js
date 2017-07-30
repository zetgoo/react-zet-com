import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'


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
    color: '#363636',
    cursor: 'pointer',
    justifyContent: 'center',
    paddingLeft: '0.75em',
    paddingRight: '0.75em',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  primary: {
    backgroundColor: '#6bb551',
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
  warning: {
    background: '#FF4136'
  },
  pad20: {
    padding: 20
  }
}

const Button = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => zcss.push(styles[item]))
  }

  return (
    <button onClick = {props.onClick} style={[
        styles.base,
        ...zcss
      ]}
      >{props.ztext}</button>
  )
}

Button.propTypes = {
  ztext: PropTypes.string.isRequired,
  zcss: PropTypes.array
}

export default Radium(Button)
