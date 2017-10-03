import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import {colors, atomic} from '../../components/constant'

import Nav from '../../components/Nav/Nav'
import NavToggle from '../../components/NavToggle/NavToggle'
import NavGroup from '../../components/NavGroup/NavGroup'
import NavItem from '../../components/NavItem/NavItem'
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'
import Logo from '../../components/Logo/Logo'
import Link from '../../components/Link/Link'
import Avatar from '../../components/Avatar/Avatar'
import SearchInput from '../../components/SearchInput/SearchInput'
import Container from '../../components/Container/Container'

const styles = {
  base: {
    backgroundColor: '#fff'
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
    <header style = {styles.base}>
      <Container>
        <Nav>
          <NavToggle isActive = {props.isActive} toggle = {props.toogleClick}/>
          <NavGroup zcss={[]}>
            <NavItem  zcss = {['logo']}>
              <Logo/>
              <SearchInput isSearching = {props.isSearching} search = {props.search}/>
            </NavItem>
          </NavGroup>
          <NavGroup zcss = {['menu', !props.isActive ? 'menuHide' : '']}>
            {props.menu && props.menu.map((item, index)=>(
              <NavItem zcss = {[...item.zcss, 'menu']}>
                <Link to={item.to}>
                  {item.text}
                </Link>
              </NavItem>
            ))}
          </NavGroup>
          {!props.userLogined && <NavGroup zcss = {['menu', !props.isActive ? 'menuHide' : '']}>
          {props.menu && props.menu.map((item, index)=>(
            <NavItem zcss = {[...item.zcss, 'menu']}>
              <Link to={item.to}>
                {item.text}
              </Link>
            </NavItem>
          ))}
        </NavGroup>}
        {props.userLogined && <NavGroup zcss = {['icon']}>
        <NavItem zcss = {['icon']}>
          {props.iconMenuUser && props.iconMenuUser.map((item, index)=>(
            <Icon zcss = {[...item.zcss, 'mgL1e']} icon = {item.icon}
              onClick = {item.action}>
            </Icon>
          ))}
        </NavItem>
        <NavItem zcss = {['avatar']}>
          <Avatar zcss = {['isCircle']} image = {props.userLogined.avatar}/>
        </NavItem>
      </NavGroup>}
    </Nav>
  </Container>
</header>
)
}

Header.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Header)
