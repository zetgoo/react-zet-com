import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'none 86ms ease-out',
    ':hover': {
      color: '#6bb551',
    },
    ':active': {
      color: '#6bb551',
    },

  },
};

const isLeftClickEvent = event => event.button === 0;

const isModifiedEvent = event => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);


const Link = (props, context) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  const handleClick = (event) => {
    if (props.onClick) {
      props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();
    context.history.push(props.to);
  };

  return (
    <a href={props.to} {...props} onClick={handleClick} style={[
        styles.base,
        ...zcss,
      ]}>
      {props.children}
    </a>
  );
};

Link.propTypes = {
  zcss: PropTypes.array,
};

Link.contextTypes = {
  history: PropTypes.object.isRequired,
};

export default Radium(Link);
