import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../../components/constant';

import Nav from '../../components/Nav/Nav';
import NavToggle from '../../components/NavToggle/NavToggle';
import NavGroup from '../../components/NavGroup/NavGroup';
import NavItem from '../../components/NavItem/NavItem';
import Icon from '../../components/Icon/Icon';
import Logo from '../../components/Logo/Logo';
import Link from '../../components/Link/Link';
import Avatar from '../../components/Avatar/Avatar';
import SearchInput from '../../components/SearchInput/SearchInput';

const styles = {
  base: {
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,0.86)',
  },
};

const Header = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  return (
    <header style={[styles.base, ...zcss, props.style]}>
      <Nav>
        <NavToggle isActive={props.isActive} toggle={props.toogleClick} />
        <NavGroup zcss={[]}>
          <NavItem zcss={['logo']}>
            <Logo />
            <SearchInput
              isSearching={props.isSearching}
              search={props.search}
            />
          </NavItem>
        </NavGroup>
        <NavGroup zcss={['menu', 'jc_ct', !props.isActive ? 'menuHide' : '']}>
          {props.menu &&
            props.menu.map(item => (
              <NavItem zcss={[...item.zcss, 'menu']}>
                <Link
                  zcss={['noUnder']}
                  style={{
                    color: 'rgba(0,0,0,0.86)',
                  }}
                  to={item.to}
                >
                  {item.text}
                </Link>
              </NavItem>
            ))}
        </NavGroup>
        {!props.userLogined && (
          <NavGroup zcss={['menu', !props.isActive ? 'menuHide' : '']}>
            {props.menu &&
              props.menu.map(item => (
                <NavItem zcss={[...item.zcss, 'menu']}>
                  <Link
                    zcss={['noUnder']}
                    style={{
                      color: 'rgba(0,0,0,0.86)',
                    }}
                    to={item.to}
                  >
                    {item.text}
                  </Link>
                </NavItem>
              ))}
          </NavGroup>
        )}
        {props.userLogined && (
          <NavGroup zcss={['icon']}>
            <NavItem zcss={['icon']}>
              {props.iconMenuUser &&
                props.iconMenuUser.map(item => (
                  <Icon
                    zcss={[...item.zcss, 'mgL1e']}
                    icon={item.icon}
                    onClick={item.action}
                  />
                ))}
            </NavItem>
            <NavItem zcss={['avatar']}>
              <Avatar zcss={['isCircle']} image={props.userLogined.avatar} />
            </NavItem>
          </NavGroup>
        )}
      </Nav>
    </header>
  );
};

Header.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOfType([null, PropTypes.object]).isRequired,
  iconMenuUser: PropTypes.arrayOf(PropTypes.object).isRequired,
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  userLogined: PropTypes.shape({
    avatar: PropTypes.string,
    fontSize: PropTypes.number,
  }).isRequired,
  search: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  isSearching: PropTypes.bool.isRequired,
  toogleClick: PropTypes.func.isRequired,
};

export default Radium(Header);
