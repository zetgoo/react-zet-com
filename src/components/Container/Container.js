import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import Sack from '../Sack/Sack';

const Container = props => {
  const zcss = props.zcss || [];
  zcss.push('container');

  return (
    <Sack {...props} zcss={zcss}>
      {props.children}
    </Sack>
  );
};

Container.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Radium(Container);
