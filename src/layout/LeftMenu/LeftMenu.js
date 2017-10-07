import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../../components/constant'

import Menu from '../../components/Menu/Menu'
import MenuLabel from '../../components/MenuLabel/MenuLabel'
import MenuItem from '../../components/MenuItem/MenuItem'
import MenuGroup from '../../components/MenuGroup/MenuGroup'
import Link from '../../components/Link/Link'
import Icon from '../../components/Icon/Icon'

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

  // const buildHtml = (data) => {
  //   if (!data) return null
  //
  //   let nodeElements = data.map((item, index) =>{
  //     let node = null
  //     if (item.groupLabel) {
  //       node = (<MenuLabel>
  //         {item.groupLabel}
  //       </MenuLabel>)
  //     }
  //     else {
  //       node = (<MenuItem>
  //         {item.icon}
  //         {item.label}
  //         {item.isActived ? item.rightActived : item.rightNoAcitved}
  //       </MenuItem>)
  //     }
  //     if(item.childMenu){
  //       buildHtml(item.childMenu)
  //       return <MenuGroup>{node}</MenuGroup>
  //     }
  //     // return (<MenuGroup>{rootNode}</MenuGroup>)
  //   })
  //
  //   return nodeElements
  // }

  // const htmlElement = buildHtml(props.data)

  return (
    <Menu data = {props.data}>
      {/*<MenuGroup>
        <MenuLabel>
          MAIN NAVIGATION
        </MenuLabel>
        <MenuItem>
          <li>
            <Link to = '/home'>
              <Icon zcss = {['']} icon = 'fa fa-cog' text = 'Dashboard'/>
            </Link>
            <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
          </li>
          <MenuItem>
            <li>
              <Link to = '/home'>
                <Icon zcss = {['']} icon = 'fa fa-cog' text = 'Visited'/>
              </Link>
              <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
            </li>
            <MenuItem>
              <li>
                <Link to = '/home'>
                  <Icon zcss = {['']} icon = 'fa fa-cog' text = 'On Week'/>
                </Link>
                <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
              </li>
            </MenuItem>
          </MenuItem>
        </MenuItem>
        <MenuItem>
          <li>
            <Link to = '/home'>
              <Icon zcss = {['']} icon = 'fa fa-cog' text = 'Dashboard 1'/>
            </Link>
            <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
          </li>
          <MenuItem>
            <li>
              <Link to = '/home'>
                <Icon zcss = {['']} icon = 'fa fa-cog' text = 'Visited'/>
              </Link>
              <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
            </li>
            <MenuItem>
              <li>
                <Link to = '/home'>
                  <Icon zcss = {['']} icon = 'fa fa-cog' text = 'On Week'/>
                </Link>
                <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
              </li>
              <li>
                <Link to = '/home'>
                  <Icon zcss = {['']} icon = 'fa fa-cog' text = 'On Month'/>
                </Link>
                <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
              </li>
              <MenuItem>
                <li>
                  <Link to = '/home'>
                    <Icon zcss = {['']} icon = 'fa fa-cog' text = 'On Week child'/>
                  </Link>
                  <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
                </li>
                <li>
                  <Link to = '/home'>
                    <Icon zcss = {['']} icon = 'fa fa-cog' text = 'On Month child'/>
                  </Link>
                  <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
                </li>
              </MenuItem>
            </MenuItem>
          </MenuItem>
        </MenuItem>
      </MenuGroup>
      <MenuGroup>
        <MenuLabel>
          MAIN NAVIGATION
        </MenuLabel>
        <MenuItem>
          <li>
            <Link to = '/home'>
              <Icon zcss = {['']} icon = 'fa fa-cog' text = 'Dashboard'/>
            </Link>
            <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
          </li>
          <MenuItem>
            <li>
              <Link to = '/home'>
                <Icon zcss = {['']} icon = 'fa fa-cog' text = 'Visited'/>
              </Link>
              <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
            </li>
            <MenuItem>
              <li>
                <Link to = '/home'>
                  <Icon zcss = {['']} icon = 'fa fa-cog' text = 'On Week'/>
                </Link>
                <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
              </li>
            </MenuItem>
          </MenuItem>
        </MenuItem>
        <MenuItem>
          <li>
            <Link to = '/home'>
              <Icon zcss = {['']} icon = 'fa fa-cog' text = 'Dashboard 1'/>
            </Link>
            <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
          </li>
          <MenuItem>
            <li>
              <Link to = '/home'>
                <Icon zcss = {['']} icon = 'fa fa-cog' text = 'Visited'/>
              </Link>
              <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
            </li>
            <MenuItem>
              <li>
                <Link to = '/home'>
                  <Icon zcss = {['']} icon = 'fa fa-cog' text = 'On Week'/>
                </Link>
                <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
              </li>
              <li>
                <Link to = '/home'>
                  <Icon zcss = {['']} icon = 'fa fa-cog' text = 'On Month'/>
                </Link>
                <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
              </li>
              <MenuItem>
                <li>
                  <Link to = '/home'>
                    <Icon zcss = {['']} icon = 'fa fa-cog' text = 'On Week child'/>
                  </Link>
                  <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
                </li>
                <li>
                  <Link to = '/home'>
                    <Icon zcss = {['']} icon = 'fa fa-cog' text = 'On Month child'/>
                  </Link>
                  <Icon zcss = {['fr','mgR1/2e']} icon = 'fa fa-hand-o-left'/>
                </li>
              </MenuItem>
            </MenuItem>
          </MenuItem>
        </MenuItem>
      </MenuGroup>*/}
    </Menu>
  )
}

LeftMenu.propTypes = {
  zcss: PropTypes.array
}

export default Radium(LeftMenu)
