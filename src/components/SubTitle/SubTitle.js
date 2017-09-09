  import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    margin: 0,
    padding: 0,
    fontWeight: 300,
    wordBreak: 'break-word',
    textRendering: 'optimizeLegibility',
    color: '#69707a'
  }
}

const SubTitle = (props)=> {
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

SubTitle.propTypes = {
  zcss: PropTypes.array
}

export default Radium(SubTitle)
