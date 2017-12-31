import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {},
};

const ProgressBar = props => {
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
    <span>
      <p style={[]}>{this.props.children}</p>
    </span>
  );
};

ProgressBar.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Radium(ProgressBar);
