import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

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
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(item => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  let container = null;

  const handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (container && !container.contains(e.target)) {
      props.onClose();
    }
  };

  if (props.isOpen) {
    document.addEventListener('click', handleOutsideClick, false);
  } else {
    document.removeEventListener('click', handleOutsideClick, false);
  }

  return !props.isOpen ? null : (
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
  );
};

Overlay.defaultProps = {
  zcss: [],
  children: [],
  isOpen: false,
  onClose: null,
};

Overlay.propTypes = {
  zcss: PropTypes.array.isRequire,
  children: PropTypes.array.isRequire,
  isOpen: PropTypes.boolean.isRequire,
  onClose: PropTypes.func.isRequire,
};

export default Radium(Overlay);
