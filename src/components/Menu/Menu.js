import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

import MenuLabel from '../../components/MenuLabel/MenuLabel';
import MenuItem from '../../components/MenuItem/MenuItem';
import MenuGroup from '../../components/MenuGroup/MenuGroup';
import Link from '../../components/Link/Link';
import Icon from '../../components/Icon/Icon';

const styles = {
  base: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    listStyle: 'none',
    margin: 0,
    color: '#fff',
    backgroundColor: '#222d32',
    fontSize: 18,
  },
};

const Menu = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }


  return (
  <aside style={[
      styles.base,
      ...zcss,
    ]}>
    {props.children}
  </aside>
  );
};

Menu.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Menu);
