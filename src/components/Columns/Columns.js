import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {
  colors,
  atomic,
  smallBreakpoint,
  mediumBreakpoint,
  largeBreakpoint,
  xLargeBreakpoint
} from '../constant'

const styles = {
  base: {
    boxSizing: 'border-box',
    padding: 0,
    border: 0,
    fontSize: '100%',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    backgroundColor: 'transparent',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between'
  }
}

const Columns = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }


  return (
    <div {...props} style={[
        styles.base,
        ...zcss
      ]}>
      {React.Children.map(props.children, function(child) {
        return React.cloneElement(child, {...props, children: child.props.children});
      })}
    </div>
  )
}

Columns.propTypes = {
  col: PropTypes.number,
  smallCol: PropTypes.number,
  mediumCol: PropTypes.number,
  largeCol: PropTypes.number,
  xLargeCol: PropTypes.number,
  breakpoints: PropTypes.shape({
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string,
    xlarge: PropTypes.string
  }),

  gutter: PropTypes.string,

  children: PropTypes.node
}

Columns.defaultProps = {
  col: 3,
  breakpoints: {
    small: smallBreakpoint,
    medium: mediumBreakpoint,
    large: largeBreakpoint,
    xLarge: xLargeBreakpoint
  },
  gutter: '16px'
};

export default Radium(Columns)
