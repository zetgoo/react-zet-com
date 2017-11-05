import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

import Overlay from '../../components/Overlay/Overlay';
import Button from '../../components/Button/Button';
import Sack from '../../components/Sack/Sack';
import ControlLabel from '../../components/ControlLabel/ControlLabel';

const styles = {
  base: {},
  modal: {
    padding: '1em',
  },
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

  let align = 'ta_l';
  if (props.alignAction === 'center') {
    align = 'ta_c';
  } else if (props.alignAction === 'center') {
    align = 'ta_r';
  }

  return (
    <div {...props} style={[styles.base, ...zcss]}>
      <Overlay zFront={props.zFront} isCloseable>
        <Sack zcss={['pd1e']}>
          <Sack>
            <ControlLabel zcss={['f2e']}>{props.title}</ControlLabel>
          </Sack>
          <Sack zcss={['']}>{props.children}</Sack>
          <Sack zcss={[align]}>
            {props.action &&
              props.action.map(item => <Button {...item}>{item.label}</Button>)}
          </Sack>
        </Sack>
      </Overlay>
    </div>
  );
};

Modal.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  action: PropTypes.arrayOf(PropTypes.object).isRequired,
  alignAction: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  isShow: PropTypes.bool.isRequired,
  zFront: PropTypes.node.isRequired,
};

export default Radium(Modal);
