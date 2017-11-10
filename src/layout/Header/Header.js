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
import Popover from '../../components/Popover/Popover';
import SearchInput from '../../components/SearchInput/SearchInput';
import Sack from '../../components/Sack/Sack';
import ControlLabel from '../../components/ControlLabel/ControlLabel';
import Button from '../../components/Button/Button';

const styles = {
  base: {
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,0.86)',
    cursor: 'pointer',
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
        <Popover
          zcss={['isBottom']}
          style={{ left: 0 }}
          zFront={
            <NavToggle isActive={props.isActive} toggle={props.toogleClick} />
          }
        >
          <NavGroup zcss={['menu', 'jc_ct']}>
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
        </Popover>

        <NavGroup zcss={[]}>
          <NavItem zcss={['logo']}>
            <Logo />
            <SearchInput
              isSearching={props.isSearching}
              search={props.search}
            />
          </NavItem>
        </NavGroup>

        <NavGroup zcss={['jc_ct', 'menuHide']}>
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
            <NavItem>{props.multipleLanguage}</NavItem>
            {props.iconMenuUser &&
              props.iconMenuUser.map(item => {
                if (item.type === 'popover') {
                  return (
                    <Popover
                      actionClick={() => console.log('popover after click')}
                      zcss={['isBottom']}
                      style={{ right: '.75em' }}
                      zFront={
                        <NavItem zcss={['icon']}>
                          <Icon {...item} zcss={[...item.zcss]} />
                          {item.info}
                        </NavItem>
                      }
                    >
                      {item.zBack}
                    </Popover>
                  );
                } else if (item.type === 'action') {
                  return (
                    <NavItem zcss={['icon']}>
                      <Icon {...item} zcss={[...item.zcss]} />
                    </NavItem>
                  );
                }
                return (
                  <NavItem zcss={['icon']}>
                    <Link
                      to={item.link}
                      zcss={['noUnder']}
                      style={{
                        color: 'rgba(0,0,0,0.86)',
                      }}
                    >
                      <Icon {...item} zcss={[...item.zcss]} />
                    </Link>
                  </NavItem>
                );
              })}

            <Popover
              zcss={['isBottom']}
              style={{ right: 0 }}
              zFront={
                <NavItem zcss={['avatar']}>
                  <Avatar zcss={['isCircle']} src={props.userLogined.avatar} />
                </NavItem>
              }
            >
              {props.zBackUser}
            </Popover>
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
  zBackUser: PropTypes.node.isRequired,
  multipleLanguage: PropTypes.node.isRequired,
};

export default Radium(Header);
