import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../../components/constant'
// import {Nav, NavItem, NavGroup,Button, Icon} from 're-bulma'

import Nav from '../../components/Nav/Nav'
import NavToggle from '../../components/NavToggle/NavToggle'
import NavGroup from '../../components/NavGroup/NavGroup'
import NavItem from '../../components/NavItem/NavItem'
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'
import Logo from '../../components/Logo/Logo'
import Link from '../../components/Link/Link'



const styles = {
  base: {

  }
}

const Header = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <Nav>
      <NavToggle isActive = {props.isActive} toggle = {props.toogleClick}/>
      <NavGroup zcss={[]}>
        <NavItem  zcss = {['logo']}>
          <Logo/>
        </NavItem>
      </NavGroup>
      <NavGroup zcss = {['menu', !props.isActive ? 'menuHide' : '']}>
        {props.menu && props.menu.map((item, index)=>(
          <NavItem>
            <Link to={item.to}>
              <Icon {...item} ></Icon>
            </Link>
          </NavItem>
        ))}
      </NavGroup>
      <NavGroup zcss = {['icon']}>
        {props.iconMenu && props.iconMenu.map((item, index)=>(
          <NavItem zcss = {['icon']} action = {item.action}>
            <Icon zcss = {item.zcss} icon = {item.icon} text = {item.text}></Icon>
          </NavItem>
        ))}
      </NavGroup>
    </Nav>
  )
}

Header.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Header)
