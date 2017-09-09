  import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    margin: 0,
    padding: 0,
    fontweight: 300,
    wordBreak: 'break-word',
    textRendering: 'optimizeLegibility',
    color: '#222324',
    fontSize: 28,
    lineHeight: 1
  },
  is1: {
    fontSize: 18
  },
  is2: {
    fontSize: 20
  }
}

const Title = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
      <p
        style={[
            styles.base,
            ...zcss
          ]}>
        {props.children}
      </p>
  )
}

Title.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Title)
