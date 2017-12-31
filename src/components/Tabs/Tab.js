import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {
    padding: '1.7rem 1.2rem',
    fontSize: '.75em',
    fontWeight: 500,
    lineHeight: 1,
    color: 'rgba(0,0,0,.7)',
    textTransform: 'uppercase',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: 'box-shadow,color',
    flex: 1,
    textAlign: 'center',
    cursor: 'pointer',
  },
  isActived: {
    color: '#000',
  },
  disabled: {
    opacity: '.2',
    cursor: 'default',
  },
};

const Tab = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  if (props.isActived) {
    props.zcss.push('isActived');
  }
  if (props.disabled) {
    props.zcss.push('disabled');
  }

  return (
    <label {...props} style={[styles.base, ...zcss]}>
      {props.label}
    </label>
  );
};

Tab.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  label: PropTypes.string.isRequired,
  onActive: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  isActived: PropTypes.bool.isRequired,
};

export default Radium(Tab);
