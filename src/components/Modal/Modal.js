import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

import Overlay from '../../components/Overlay/Overlay';
import Button from '../../components/Button/Button';

const styles = {
  base: {},
};

const Modal = props => {
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
    <div {...props} style={[styles.base, ...zcss]}>
      <Overlay zFront={props.zFront}>
        {props.children}
        <div>
          {props.action &&
            props.action.map(item => <Button {...item}>{item.label}</Button>)}
        </div>
      </Overlay>
    </div>
  );
};

Modal.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  action: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isShow: PropTypes.bool.isRequired,
  zFront: PropTypes.node.isRequired,
};

export default Radium(Modal);
