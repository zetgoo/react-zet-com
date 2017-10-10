import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    paddingBottom: 10,
  }
}

const MenuGroup = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <div style={[
        styles.base,
        ...zcss
      ]}>
      {props.children}
    </div>
  )
}

MenuGroup.propTypes = {
  zcss: PropTypes.array
}

export default Radium(MenuGroup)
