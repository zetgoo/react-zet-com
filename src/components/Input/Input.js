import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

const styles = {
  base: {
    appearance: 'none',
    fontFamily: '"Raleway", sans-serif',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
    boxShadow: 'none',
    display: 'inline-flex',
    fontSize: '1rem',
    height: '2.25em',
    justifyContent: 'flex-start',
    lineHeight: 1.5,
    position: 'relative',
    verticalAlign: 'top',
    backgroundColor: '#fff',
    borderColor: '#dbdbdb',
    color: '#363636',
    boxShadow: 'inset 0 1px 2px rgba(10, 10, 10, 0.1)',
    maxWidth: '100%',
    width: '100%',
    padding: 3,
    ':hover':{
      borderColor: '#6bb551'
    },
    ':focus':{
      borderColor: '#6bb551',
      outline: 0,
    }
  }
}

const Input = (props)=> {
  return (
    <input {...props} style= {[
        styles.base
      ]} />
    )
  }

  Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  export default Radium(Input)
