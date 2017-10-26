import React from 'react';
import PropTypes from 'prop-types';
import { StyleRoot, Style } from 'radium';
import Sack from '../Sack/Sack';
// import normalize from 'radium-normalize';

const AppContainer = props => (
  <StyleRoot>
    {/* <Style rules={normalize} /> */}
    <Style rules={props.rules} />
    <Sack {...props}>{props.children}</Sack>
  </StyleRoot>
);

AppContainer.propTypes = {
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
  rules: PropTypes.oneOfType([null, PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppContainer;
