import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';
import Button from '../Button/Button';
import validator from 'validator';

const styles = {
  base: {
  },
};

const Form = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  const init = (schema) => {
    const elements = schema.control && schema.control.map((item, index) => {
      const element = React.createElement(
        item.type,
        item.props,
        [...item.children],
      );
      return element;
    });
    return elements;
  };

  let hasError = false;

  const { schema } = props;

  const submit = (e) => {
    e.preventDefault();
    if (!hasError) {
      props.onSubmit();
    }
  };

  const reset = (e) => {
    e.preventDefault();
    props.onReset();
  };

  const validate = children => React.Children.map(children, (child) => {
    let childProps = {};
    if (React.isValidElement(child)) {
      if (child.type.displayName === 'TextField') {
        const rule = schema[child.props.name];
        const valid = validator.isLength(child.props.value, { min: rule.minLength, max: rule.maxLength });
        if (!valid) {
          child.props.errors.push({ text: schema[child.props.name].message.length });
          hasError = true;
        }
      } else if (child.type.displayName === 'Checkbox' && child.props.isForce && !child.props.checked) {
        hasError = true;
      } else if (child.type.displayName === 'Button' && child.props.type === 'submit' && hasError) {
        child.props.zcss.push('disable');
      } else if (child.type.displayName === 'Button' && child.props.type === 'reset') {
        childProps = { onClick: reset };
        // child.props.onClick = reset
      }
      // childProps = {...someNew: "propToAdd"};
    }
    if (child.props) {
      childProps.children = validate(child.props.children);
      return React.cloneElement(child, childProps);
    }
    return child;
  });

  // const validate = (propsChild = props) =>{
  //   let {schema, children} = props
  //   if(children) return
  //   children && children.map((item, index) => {
  //     if(item.type.displayName ==='TextField'){
  //       const rule = schema[item.props.name]
  //       const valid = validator.isLength(item.props.value, {min: rule.minLength, max: rule.maxLength})
  //       if(!valid){
  //         item.props.errors.push({text: 'Chiều dài ko hợp lý'})
  //         hasError = true
  //       }
  //     }
  //     else if (item.type.displayName === 'Button' && item.props.type === 'submit' && hasError) {
  //       item.props.zcss.push('disable')
  //     }
  //     newChildren.push
  //     validate(item.props)
  //   })
  //
  //   return newChildren
  // }

  return (
    <form onSubmit = {submit} style={[
        styles.base,
        ...zcss,
      ]}>
      {validate(props.children)}
    </form>
  );
};

Form.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Form);
