import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../../components/constant'

import Menu from '../../components/Menu/Menu'
import MenuLabel from '../../components/MenuLabel/MenuLabel'
import MenuItem from '../../components/MenuItem/MenuItem'
import MenuGroup from '../../components/MenuGroup/MenuGroup'

const styles = {
  base: {

  }
}

const LeftMenu = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  // let rootNode = React.createElement(<div/>)

  const buildHtml = (data) => {
    if (!data) return null

    let nodeElements = data.map((item, index) =>{
      let node = null
      if (item.groupLabel) {
        node = (<MenuLabel>
          {item.groupLabel}
        </MenuLabel>)
      }
      else {
        node = (<MenuItem>
          {item.icon}
          {item.label}
          {item.isActived ? item.rightActived : item.rightNoAcitved}
        </MenuItem>)
      }
      if(item.childMenu){
        buildHtml(item.childMenu)
        return <MenuGroup>{node}</MenuGroup>
      }
      // return (<MenuGroup>{rootNode}</MenuGroup>)
    })

    return nodeElements
  }

  return (
    <Menu>
      {buildHtml(props.data)}
    </Menu>
  )
}

LeftMenu.propTypes = {
  zcss: PropTypes.array
}

export default Radium(LeftMenu)
