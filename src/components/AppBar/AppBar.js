import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {},
};

const AppBar = props => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(item => zcss.concat(styles[item], atomic[item]));
  }

  return (
    <header>
      <div />
    </header>
  );
};

AppBar.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Radium(AppBar);
