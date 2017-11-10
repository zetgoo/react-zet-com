import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'none 86ms ease-out',
    ':hover': {
      textDecoration: 'underline',
    },
    ':active': {
      color: '#6bb551',
    },
  },
  noUnder: {
    ':hover': {
      textDecoration: 'none',
    },
  },
};

const isLeftClickEvent = event => event.button === 0;

const isModifiedEvent = event =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const Link = (props, context) => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  const handleClick = event => {
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
    <a
      href={props.to}
      {...props}
      onClick={props.href ? undefined : handleClick}
      style={[styles.base, ...zcss, props.style]}
    >
      {props.children}
    </a>
  );
};

Link.contextTypes = {
  history: PropTypes.object.isRequired,
};

Link.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOfType([null, PropTypes.object]).isRequired,
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  href: PropTypes.oneOfType([null, PropTypes.string]).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Radium(Link);
