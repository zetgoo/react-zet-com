import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';
import Sack from '../Sack/Sack';

const Box = props => {
  const zcss = props.zcss || [];
  zcss.push('pd1r');
  zcss.push('bd_s_solid');
  zcss.push('bd_w_1');
  zcss.push('bd_c_default');
  zcss.push('bd_r_5');

  return (
    <Sack {...props} zcss={[...zcss, ...props.zcss]}>
      {props.children}
    </Sack>
  );
};

Box.defaultProps = {
  zcss: [],
};

Box.propTypes = {
  zcss: PropTypes.array.isRequired,
};

export default Radium(Box);
