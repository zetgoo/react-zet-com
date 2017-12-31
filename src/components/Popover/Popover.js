import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';
import HOCPopover from './HOCPopover';

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

const Popover = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  let container = null;

  const handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (container && !container.contains(e.target)) {
      props.onShow();
    }
  };

  if (props.isShow) {
    document.addEventListener('click', handleOutsideClick);
  } else {
    document.removeEventListener('click', handleOutsideClick);
  }

  const handleClick = () => {
    props.onShow();
    if (props.actionClick) {
      props.actionClick();
    }
  };

  return (
    <div style={styles.base}>
      {React.cloneElement(props.zFront, { onClick: handleClick })}
      {props.isShow && (
        <div
          style={[styles.content, ...zcss, props.style]}
          ref={node => {
            container = node;
          }}
        >
          {props.children}
        </div>
      )}
    </div>
  );
};

Popover.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.arrayOf(null, PropTypes.object).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isShow: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
  zFront: PropTypes.node.isRequired,
  actionClick: PropTypes.func.isRequired,
};

export default HOCPopover(Radium(Popover));
