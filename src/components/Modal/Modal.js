import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

import Overlay from '../../components/Overlay/Overlay'
import Button from '../../components/Button/Button'

const styles = {
  base: {
  }
}

const Modal = (props)=> {
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
      >
      <Overlay isOpen = {props.isOpen} onClose = {props.handleClose}>
        {props.children}
        <div>
          {props.action && props.action.map((item, index)=>
            <Button {...item}>{item.label}</Button>
          )}
        </div>
      </Overlay>
    </div>
  )
}

Modal.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Modal)
