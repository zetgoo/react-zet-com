'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constant = require('../constant');

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var styles = {
  base: {}
};

var Form = function Form(props) {
  var zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(function (item, index) {
      zcss.push(styles[item]);
      zcss.push(_constant.atomic[item]);
    });
  }

  var init = function init(schema) {
    var elements = schema.control && schema.control.map(function (item, index) {
      var element = _react2.default.createElement(item.type, item.props, [].concat(_toConsumableArray(item.children)));
      return element;
    });
    return elements;
  };

  var hasError = false;

  var schema = props.schema;


  var submit = function submit(e) {
    e.preventDefault();
    if (!hasError) {
      props.onSubmit();
    }
  };

  var reset = function reset(e) {
    e.preventDefault();
    props.onReset();
  };

  var validate = function validate(children) {
    return _react2.default.Children.map(children, function (child) {
      var childProps = {};
      if (_react2.default.isValidElement(child)) {
        if (child.type.displayName === 'TextField') {
          var rule = schema[child.props.name];
          var valid = _validator2.default.isLength(child.props.value, { min: rule.minLength, max: rule.maxLength });
          if (!valid) {
            child.props.errors.push({ text: schema[child.props.name].message.length });
            hasError = true;
          }
        } else if (child.type.displayName === 'Checkbox' && child.props.isForce && !child.props.checked) {
          hasError = true;
        } else if (child.type.displayName === 'Button' && child.props.type === 'submit' && hasError) {
          child.props.zcss.push('disable');
        } else if (child.type.displayName === 'Button' && child.props.type === 'reset') {
          childProps = { onClick: reset
            // child.props.onClick = reset
          };
        }
        // childProps = {...someNew: "propToAdd"};
      }
      if (child.props) {
        childProps.children = validate(child.props.children);
        return _react2.default.cloneElement(child, childProps);
      }
      return child;
    });
  };

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

  return _react2.default.createElement(
    'form',
    { onSubmit: submit, style: [styles.base].concat(zcss) },
    validate(props.children)
  );
};

Form.propTypes = {
  zcss: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Form);