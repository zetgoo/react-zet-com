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

AppContainer.defaultProps = {
  zcss: [],
};

AppContainer.propTypes = {
  zcss: PropTypes.array.isRequired,
};

export default AppContainer;
