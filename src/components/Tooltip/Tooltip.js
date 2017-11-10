import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';
import HOCPopover from './HOCTooltip';

const styles = {
  base: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'all',
  },
  content: {
    position: 'absolute',
    opacity: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: '.2rem',
    transitionDelay: '.07s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: 'opacity,transform',
    zIndex: 99,
  },
  isTop: {
    bottom: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  isRight: {
    left: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  isBottom: {
    top: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  isLeft: {
    right: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
};

const Tooltip = props => {
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
    <div style={styles.base}>
      {React.cloneElement(props.zFront, {
        onMouseEnter: props.onShow,
        onMouseLeave: props.onHide,
      })}
      {props.isShow && (
        <div style={[styles.content, ...zcss]}>{props.children}</div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isShow: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  zFront: PropTypes.node.isRequired,
};

export default HOCPopover(Radium(Tooltip));
