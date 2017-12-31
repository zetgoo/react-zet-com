import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';
import Image from '../Image/Image';
import Icon from '../Icon/Icon';

const styles = {
  base: {
    position: 'relative',
    display: 'inline-block',
    width: 32,
    height: 32,
    lineHeight: 1.5,
    overflow: 'hidden',
    fontSize: '1.25em',
    color: '#fff',
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: '#9e9e9e',
    borderRadius: 5,
    '@media (max-width: 575px)': {
      height: 32,
      width: 32,
    },
  },
  isCircle: {
    borderRadius: '50%',
  },
};

const Avatar = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  if (props.src) {
    return (
      <Image
        {...props}
        zcss={[...props.zcss, 'isAvatar']}
        width={props.width || 32}
        ratio={1}
      />
    );
  }

  return (
    <div style={[styles.base, ...zcss]}>
      {props.icon && <Icon icon={props.icon} />}
      {props.text && props.text}
    </div>
  );
};

Avatar.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Radium(Avatar);
