import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import TabGroup from './TabGroup'
import Tab from './Tab'
import {colors, atomic} from '../constant'

const styles = {
  base: {
    alignItems: 'stretch',
    display: 'flex',
    justifyContent: 'space-between',
    lineHeight: 24,
    overflow: 'hidden',
    overflowX: 'auto',
    whiteSpace: 'nowrap'
  },
  isBox: {
    borderSize: 1,
    borderColor: colors.success,
    borderStyle: 'solid'
  },
  list: {
    alignItems: 'center',
    borderBottom: '1px solid #d3d6db',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    fontWeight: 'normal',
    verticalAlign: 'baseline',
    backgroundColor: 'transparent',
    userSelect: 'none',
  }
}

const Tabs = (props)=> {
  let zcss = []
  if (props.zcss && Array.isArray(props.zcss)){
    props.zcss.map((item, index) => {
      zcss.push(styles[item])
      zcss.push(atomic[item])
    })
  }

  return (
    <div style = {[styles.base, ...zcss]}>
      <TabGroup>
        {props.tabs && props.tabs.map((item, index) =>(
          <Tab zcss = {[index === props.indexActice ? 'isActived' : '']} icon = {item.icon} key = {index}>{item.text}</Tab>
        ))}
      </TabGroup>
    </div>
  )
}

Tabs.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Tabs)
