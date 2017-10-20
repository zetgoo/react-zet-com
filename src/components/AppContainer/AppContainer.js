import React, { Component } from 'react';
import { StyleRoot, Style } from 'radium';
// import normalize from 'radium-normalize';

const AppContainer = props => (
    <StyleRoot>
      <div>
        {/* <Style rules={normalize} /> */}
        <Style rules={props.style} />
        {props.children}
      </div>
    </StyleRoot>
);

export default AppContainer;
