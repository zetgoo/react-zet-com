import React, {Component} from 'react'
import { StyleRoot, Style } from 'radium'
import normalize from 'radium-normalize';

const AppContainer = (props)=> {
  return (
    <StyleRoot>
      <div>
        <Style rules={normalize} />
        {props.children}
      </div>
    </StyleRoot>
  )
}

export default AppContainer
