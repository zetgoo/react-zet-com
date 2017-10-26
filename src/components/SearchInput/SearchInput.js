import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';
import Addons from '../Addons/Addons';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const styles = {
  base: {
    position: 'relative',
    marginLeft: '1em',
    width: '100%',
    backgroundColor: '#f6f6f6',
  },
  icon: {
    position: 'absolute',
    top: 9,
    pointerEvents: 'none',
    left: 7,
    zIndex: 4,
    fontSize: '.8125em',
  },
};

const SearchInput = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  const searchEnter = e => {
    if (e.which === 13 || e.keyCode === 13) {
      e.preventDefault();
      props.search();
    }
  };

  return (
    <div {...props} style={[styles.base, ...zcss]}>
      <Input
        zcss={['pdL2e', 'bd_s_none', 'bs_none', 'bgInherit']}
        placeholder="Search for products and resources"
        onKeyDown={searchEnter}
      />
      {!props.isSearching && <i style={styles.icon} className="fa fa-search" />}
      {props.isSearching && (
        <i style={styles.icon} className="fa fa-spinner fa-spin" />
      )}
      {props.children}
    </div>
  );
};

SearchInput.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  search: PropTypes.func.isRequired,
  isSearching: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Radium(SearchInput);
