  import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

const styles = {
  base: {
  }
}

const Menu = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <aside style={[
        styles.base,
        ...zcss
      ]}>
      {props.children}
    </aside>
  )
}

Menu.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Menu)
