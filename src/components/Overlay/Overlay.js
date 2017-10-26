import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';
import HOCOverlay from './HOCOverlay';

const styles = {
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 300,
    display: 'flex',
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'all',
  },

  content: {
    opacity: 1,
    width: '50vw',
    display: 'flex',
    maxWidth: '96vw',
    maxHeight: '96vh',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: '.2rem',
    boxShadow: '0 19px 60px rgba(0,0,0,.3), 0 15px 20px rgba(0,0,0,.22)',
    transitionDelay: '.07s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionDuration: '.35s',
    transitionProperty: 'opacity,transform',
    zIndex: 1,
  },

  cover: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    transitionDuration: '.35s',
    transitionProperty: 'opacity',
    opacity: '.6',
  },
};

const Overlay = props => {
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
    document.addEventListener('click', handleOutsideClick, false);
  } else {
    document.removeEventListener('click', handleOutsideClick, false);
  }

  return (
    <div>
      {React.cloneElement(props.zFront, { onClick: props.onShow })}
      {props.isShow && (
        <div style={styles.base}>
          <div style={styles.cover} />
          <div
            style={styles.content}
            ref={node => {
              container = node;
            }}
          >
            {props.children}
          </div>
        </div>
      )}
    </div>
  );
};

Overlay.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isShow: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
  zFront: PropTypes.node.isRequired,
};

const enhanceOverlay = HOCOverlay(Overlay);

export default Radium(enhanceOverlay);
