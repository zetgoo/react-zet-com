import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'
import Addons from '../Addons/Addons'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'

const styles = {
  base: {
    position: 'relative',
    marginLeft: '1em',
    width: '60%'
  },
  icon: {
    position: 'absolute',
    top: 7,
    pointerEvents: 'none',
    left: 7,
    zIndex: 4,
  }
}

const SearchInput = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  const searchEnter = (e) =>{
    if (e.which == 13 || e.keyCode == 13) {
      e.preventDefault
      props.search()
    }
  }

  return (
    <div {...props} style={[
        styles.base,
        ...zcss
      ]}>
        <Input zcss = {['pdL2e']} placeholder="Search for products and resources" onKeyDown = {searchEnter}/>
        {!props.isSearching && <i style = {styles.icon} className = 'fa fa-search'></i>}
        {props.isSearching && <i style = {styles.icon} className = 'fa fa-spinner fa-spin'></i>}
      {props.children}
    </div>
  )
}

SearchInput.propTypes = {
  zcss: PropTypes.array
}

export default Radium(SearchInput)
