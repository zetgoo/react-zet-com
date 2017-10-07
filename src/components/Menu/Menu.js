import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../constant'

import MenuLabel from '../../components/MenuLabel/MenuLabel'
import MenuItem from '../../components/MenuItem/MenuItem'
import MenuGroup from '../../components/MenuGroup/MenuGroup'

const styles = {
  base: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    listStyle: 'none',
    margin: 0,
    color: '#fff',
    backgroundColor: '#222d32',
    fontSize: 18,
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
          <li>
            <Link to = '/home'>
              <Icon zcss = {['']} icon = {item.icon.split('.')[1]} text = {item.label}/>
            </Link>
            {item.isActived
              ? <Icon zcss = {['fr','mgR1/2e']} icon = {item.rightActived.split('.')[1]}/>
              : <Icon zcss = {['fr','mgR1/2e']} icon = {item.rightNoAcitved.split('.')[1]}/>
            }
          </li>
        </MenuItem>)
      }
      if(item.childMenu){
        buildHtml(item.childMenu)
        return {node}
      }
      return (<MenuGroup>{node}</MenuGroup>)
    })

    return nodeElements
  }

  return (
    <aside style={[
        styles.base,
        ...zcss
      ]}>
      {buildHtml(props.data)}
    </aside>
  )
}

Menu.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Menu)
