import React from 'react';
import Radium from 'radium';
import PickerInput from 'react-day-picker/DayPickerInput';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {},
};

const DayPickerInput = props => {
  let zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    zcss = props.zcss.map(item => {
      if (styles[item]) {
        return zcss.concat(styles[item]);
      }
      return zcss.concat(atomic[item]);
    });
  }

  return <PickerInput {...props} />;
};

DayPickerInput.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Radium(DayPickerInput);
