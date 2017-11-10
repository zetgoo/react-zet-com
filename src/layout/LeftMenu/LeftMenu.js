import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../../components/constant';

import Menu from '../../components/Menu/Menu';
import MenuLabel from '../../components/MenuLabel/MenuLabel';
import MenuItem from '../../components/MenuItem/MenuItem';
import MenuGroup from '../../components/MenuGroup/MenuGroup';
import Link from '../../components/Link/Link';
import Icon from '../../components/Icon/Icon';
import Sack from '../../components/Sack/Sack';

const styles = {
  base: {},
};

const LeftMenu = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  const rootNode = React.cloneElement(<Sack />, [], []);
  const childArr = [];

  const buildHtml = data => {
    if (!data) return null;

    const currentNode = null;

    return data.map((item, index) => {
      const node = null;
      if (item.groupLabel) {
        return (
          <MenuLabel>
            {item.groupLabel}
            <li />
            <li />
          </MenuLabel>
        );
      }

      return (
        <MenuItem>
          <li>
            <Link to="/home">
              <Icon
                zcss={['']}
                icon={`fa ${item.icon.split('.')[1]}`}
                text={item.label}
              />
            </Link>
            {item.isActived ? (
              <Icon
                zcss={['fr', 'mgR.5e']}
                icon={`fa ${item.rightActived.split('.')[1]}`}
              />
            ) : (
              <Icon
                zcss={['fr', 'mgR.5e']}
                icon={`fa ${item.rightNoAcitved.split('.')[1]}`}
              />
            )}
          </li>
          <li />
        </MenuItem>
      );

      childArr.push(node);

      if (item.childMenu) {
        buildHtml(item.childMenu);
        // const temp =  React.cloneElement(node,{...node.props, children: childArr})
        // // childArr = []
        // return temp
      }
      return childArr;
    });
  };

  const htmlElement = buildHtml(props.data);

  return (
    <Menu zcss={['fw500']}>
      <MenuGroup>
        <MenuLabel>MAIN NAVIGATION</MenuLabel>
        <MenuItem zcss={['mgB1r']}>
          <li>
            <Link to="/home">
              <Icon zcss={['f1e']} icon="fa fa-cog" text="Dashboard" />
            </Link>
            <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
          </li>
          <MenuItem>
            <li>
              <Link to="/home">
                <Icon zcss={['f1e']} icon="fa fa-cog" text="Visited" />
              </Link>
              <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
            </li>
            <MenuItem>
              <li>
                <Link to="/home">
                  <Icon zcss={['f1e']} icon="fa fa-cog" text="On Week" />
                </Link>
                <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
              </li>
            </MenuItem>
          </MenuItem>
        </MenuItem>
        <MenuItem>
          <li>
            <Link to="/home">
              <Icon zcss={['f1e']} icon="fa fa-cog" text="Dashboard 1" />
            </Link>
            <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
          </li>
          <MenuItem>
            <li>
              <Link to="/home">
                <Icon zcss={['f1e']} icon="fa fa-cog" text="Visited" />
              </Link>
              <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
            </li>
            <MenuItem>
              <li>
                <Link to="/home">
                  <Icon zcss={['f1e']} icon="fa fa-cog" text="On Week" />
                </Link>
                <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
              </li>
              <li>
                <Link to="/home">
                  <Icon zcss={['f1e']} icon="fa fa-cog" text="On Month" />
                </Link>
                <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
              </li>
              <MenuItem>
                <li>
                  <Link to="/home">
                    <Icon
                      zcss={['f1e']}
                      icon="fa fa-cog"
                      text="On Week child"
                    />
                  </Link>
                  <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
                </li>
                <li>
                  <Link to="/home">
                    <Icon
                      zcss={['f1e']}
                      icon="fa fa-cog"
                      text="On Month child"
                    />
                  </Link>
                  <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
                </li>
              </MenuItem>
            </MenuItem>
          </MenuItem>
        </MenuItem>
      </MenuGroup>
      <MenuGroup>
        <MenuLabel>MAIN NAVIGATION</MenuLabel>
        <MenuItem>
          <li>
            <Link to="/home">
              <Icon zcss={['f1e']} icon="fa fa-cog" text="Dashboard" />
            </Link>
            <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
          </li>
          <MenuItem>
            <li>
              <Link to="/home">
                <Icon zcss={['f1e']} icon="fa fa-cog" text="Visited" />
              </Link>
              <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
            </li>
            <MenuItem>
              <li>
                <Link to="/home">
                  <Icon zcss={['f1e']} icon="fa fa-cog" text="On Week" />
                </Link>
                <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
              </li>
            </MenuItem>
          </MenuItem>
        </MenuItem>
        <MenuItem>
          <li>
            <Link to="/home">
              <Icon zcss={['f1e']} icon="fa fa-cog" text="Dashboard 1" />
            </Link>
            <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
          </li>
          <MenuItem>
            <li>
              <Link to="/home">
                <Icon zcss={['f1e']} icon="fa fa-cog" text="Visited" />
              </Link>
              <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
            </li>
            <MenuItem>
              <li>
                <Link to="/home">
                  <Icon zcss={['f1e']} icon="fa fa-cog" text="On Week" />
                </Link>
                <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
              </li>
              <li>
                <Link to="/home">
                  <Icon zcss={['f1e']} icon="fa fa-cog" text="On Month" />
                </Link>
                <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
              </li>
              <MenuItem>
                <li>
                  <Link to="/home">
                    <Icon
                      zcss={['f1e']}
                      icon="fa fa-cog"
                      text="On Week child"
                    />
                  </Link>
                  <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
                </li>
                <li>
                  <Link to="/home">
                    <Icon zcss={['f1e']} icon="fa fa-cog" text="On Month" />
                  </Link>
                  <Icon zcss={['fr', 'mgR.5e']} icon="fa fa-hand-o-left" />
                </li>
              </MenuItem>
            </MenuItem>
          </MenuItem>
        </MenuItem>
      </MenuGroup>
    </Menu>
  );
};

LeftMenu.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(LeftMenu);

// <Menu>
//   {htmlElement}
// </Menu>
