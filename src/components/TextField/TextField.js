import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Label from '../Label/Label';
import Icon from '../Icon/Icon';

import { colors, atomic } from '../constant';

const styles = {

  base: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    paddingBottom: '.75em',
  },
  help: {
    fontSize: '0.75em',
    display: 'block',
    marginBottom: 0,
    color: '#6a737d',
  },
  label: {
    display: 'block',
    fontSize: '0.875em',
    fontWeight: 'inherit',
    textAlign: 'left',
    position: 'static',
  },
};

const TextField = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }
  return (
    <div>
      <label style = {styles.label}>{props.label}</label>
      <span style={[styles.help]}>
        {props.help}
      </span>
      <div style = {[styles.base]}>
        <Input disabled = {props.disabled}
          zcss = {[`${props.errors && props.errors.length > 0 ? 'error' : ''}`,
           `${props.disabled ? 'disabled' : ''}`]} placeholder = 'zetgoo' value = {props.value}
          onChange = {props.onChange} placeholder = {props.placeholder} type = {props.type}/>
        {props.errors && props.errors.length > 0 && <Icon zcss = {['cl_danger', 'mgL1/2e']} icon = 'fa fa-exclamation-circle'/>}
        {props.valid && <Icon zcss = {['cl_success', 'mgL1/2e']} icon = 'fa fa-check-circle'/>}
      </div>
      {props.errors && props.errors.length > 0 && props.errors.map((item, index) =>
        <span style={[styles.help, atomic.cl_danger]}>
          {item.text}
        </span>)}
    </div>
  );
};

TextField.propTypes = {
};

export default Radium(TextField);
