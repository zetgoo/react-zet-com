'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var colors = exports.colors = {
  no: '#fff',
  dark: '#000',

  initBorder: '#dbdbdb',
  init: '',
  defaultBorder: '',
  default: '#363636',

  primary: '#0275d8',
  success: '#6bb551',
  disable: '#98c699',
  info: '#5bc0de',
  danger: '#ff1f4b',
  warning: '#ffdd57',
  cancel: '#B0B0B0'
};

var atomic = exports.atomic = {
  //layout grid: padding
  'pd1/2r': { padding: '0.5rem' },
  pd1r: { padding: '1rem' },
  pd2r: { padding: '2rem' },
  pd3r: { padding: '3rem' },
  'pdT1/2r': { paddingTop: '.5rem' },
  pdT1r: { paddingTop: '1rem' },
  pdT2r: { paddingTop: '2rem' },
  pdT3r: { paddingTop: '3rem' },
  'pdR1/2r': { paddingRight: '.5rem' },
  pdR1r: { paddingRight: '1rem' },
  pdR2r: { paddingRight: '2rem' },
  pdR3r: { paddingRight: '3rem' },
  'pdB1/2r': { paddingBottom: '.5rem' },
  pdB1r: { paddingBottom: '1rem' },
  pdB2r: { paddingBottom: '2rem' },
  pdB3r: { paddingBottom: '3rem' },
  'pdL1/2r': { paddingLeft: '.5rem' },
  pdL1r: { paddingLeft: '1rem' },
  pdL2r: { paddingLeft: '2rem' },
  pdL3r: { paddingLeft: '3rem' },

  'pd1/2e': { padding: '.5em' },
  pd1e: { padding: '1em' },
  pd2e: { padding: '2em' },
  pd3e: { padding: '3em' },
  'pdT1/2e': { paddingTop: '.5em' },
  pdT1e: { paddingTop: '1em' },
  pdT2e: { paddingTop: '2em' },
  pdT3e: { paddingTop: '3em' },
  'pdR1/2e': { paddingRight: '.5em' },
  pdR1e: { paddingRight: '1em' },
  pdR2e: { paddingRight: '2em' },
  pdR3e: { paddingRight: '3em' },
  'pdB1/2e': { paddingBottom: '.5em' },
  pdB1e: { paddingBottom: '1em' },
  pdB2e: { paddingBottom: '2em' },
  pdB3e: { paddingBottom: '3em' },
  'pdL1/2e': { paddingLeft: '.5em' },
  pdL1e: { paddingLeft: '1em' },
  pdL2e: { paddingLeft: '2em' },
  pdL3e: { paddingLeft: '3em' },

  //layout grid: margin
  'mg1/2r': { margin: '.5rem' },
  mg1r: { margin: '1rem' },
  mg2r: { margin: '2rem' },
  mg3r: { margin: '3rem' },
  'mgT1/2r': { marginTop: '.5rem' },
  mgT1r: { marginTop: '1rem' },
  mgT2r: { marginTop: '2rem' },
  mgT3r: { marginTop: '3rem' },
  'mgR1/2r': { marginRight: '.5rem' },
  mgR1r: { marginRight: '1rem' },
  mgR2r: { marginRight: '2rem' },
  mgR3r: { marginRight: '3rem' },
  'mgB1/2r': { marginBottom: '.5rem' },
  mgB1r: { marginBottom: '1rem' },
  mgB2r: { marginBottom: '2rem' },
  mgB3r: { marginBottom: '3rem' },
  'mgL1/2r': { marginLeft: '.5rem' },
  mgL1r: { marginLeft: '1rem' },
  mgL2r: { marginLeft: '2rem' },
  mgL3r: { marginLeft: '3rem' },

  'mg1/2e': { margin: '.5em' },
  mg1e: { margin: '1em' },
  mg2e: { margin: '2em' },
  mg3e: { margin: '3em' },
  'mgT1/2e': { marginTop: '.5em' },
  mgT1e: { marginTop: '1em' },
  mgT2e: { marginTop: '2em' },
  mgT3e: { marginTop: '3em' },
  'mgR1/2e': { marginRight: '.5em' },
  mgR1e: { marginRight: '1em' },
  mgR2e: { marginRight: '2em' },
  mgR3e: { marginRight: '3em' },
  'mgB1/2e': { marginBottom: '.5em' },
  mgB1e: { marginBottom: '1em' },
  mgB2e: { marginBottom: '2em' },
  mgB3e: { marginBottom: '3em' },
  'mgL1/2e': { marginLeft: '.5em' },
  mgL1e: { marginLeft: '1em' },
  mgL2e: { marginLeft: '2em' },
  mgL3e: { marginLeft: '3em' },

  //background color
  bg_primary: { backgroundColor: colors.primary },
  bg_success: { backgroundColor: colors.success },
  bg_disable: { backgroundColor: colors.disable },
  bg_info: { backgroundColor: colors.info },
  bg_danger: { backgroundColor: colors.danger },
  bg_warning: { backgroundColor: colors.warning },
  bg_cancel: { backgroundColor: colors.cancel },

  //color
  cl_primary: { color: colors.primary },
  cl_success: { color: colors.success },
  cl_disable: { color: colors.disable },
  cl_info: { color: colors.info },
  cl_danger: { color: colors.danger },
  cl_warning: { color: colors.warning },
  cl_cancel: { color: colors.cancel },

  //font size
  f1r: { fontSize: '1rem' },
  f2r: { fontSize: '2rem' },
  f3r: { fontSize: '3rem' },
  f1e: { fontSize: '1em' },
  f2e: { fontSize: '2em' },
  f3e: { fontSize: '3em' },

  // float
  fl: { float: 'left' },
  fr: { float: 'right' },
  fc: { float: 'center' },

  // display
  dp_i: { display: 'inline' },
  dp_ib: { display: 'inline-block' },
  dp_b: { display: 'block' },
  dp_f: { display: 'flex' },
  dp_if: { display: 'inline-flex' },
  dp_n: { display: 'none' },

  jc_st: { justifyContent: 'flex-start' },
  jc_ed: { justifyContent: 'flex-end' },
  jc_ct: { justifyContent: 'center' }

  // break pointer for responsive
};var smallBreakpoint = exports.smallBreakpoint = 576;
var mediumBreakpoint = exports.mediumBreakpoint = 768;
var largeBreakpoint = exports.largeBreakpoint = 992;
var xLargeBreakpoint = exports.xLargeBreakpoint = 1200;