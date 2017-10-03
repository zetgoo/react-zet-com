import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
  },
  container:{
    maxWidth: 1012,
    marginRight: 'auto',
    marginLeft: 'auto',
  }
}

const Sack = (props)=> {
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
      ]}
      >{props.children}</div>
  )
}

Sack.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Sack)
