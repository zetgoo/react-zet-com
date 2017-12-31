export const colors = {
  no: '#fff',
  dark: '#000',

  initBorder: '#dbdbdb',
  init: '',
  defaultBorder: '#dbdbdb',
  default: '#363636',

  primary: '#1fc8db',
  success: '#6bb551',
  disable: '#98c699',
  info: '#5bc0de',
  danger: '#ed6c63',
  warning: '#ffdd57',
  cancel: '#B0B0B0',
};

export const atomic = {
  // layout grid: padding
  'pd.5r': { padding: '0.5rem' },
  pd1r: { padding: '1rem' },
  pd2r: { padding: '2rem' },
  pd3r: { padding: '3rem' },
  'pdT.5r': { paddingTop: '.5rem' },
  pdT1r: { paddingTop: '1rem' },
  pdT2r: { paddingTop: '2rem' },
  pdT3r: { paddingTop: '3rem' },
  'pdR.5r': { paddingRight: '.5rem' },
  pdR1r: { paddingRight: '1rem' },
  pdR2r: { paddingRight: '2rem' },
  pdR3r: { paddingRight: '3rem' },
  'pdB.5r': { paddingBottom: '.5rem' },
  pdB1r: { paddingBottom: '1rem' },
  pdB2r: { paddingBottom: '2rem' },
  pdB3r: { paddingBottom: '3rem' },
  'pdL.5r': { paddingLeft: '.5rem' },
  pdL1r: { paddingLeft: '1rem' },
  pdL2r: { paddingLeft: '2rem' },
  pdL3r: { paddingLeft: '3rem' },

  'pd.5e': { padding: '.5em' },
  pd1e: { padding: '1em' },
  pd2e: { padding: '2em' },
  pd3e: { padding: '3em' },
  'pdT.5e': { paddingTop: '.5em' },
  pdT1e: { paddingTop: '1em' },
  pdT2e: { paddingTop: '2em' },
  pdT3e: { paddingTop: '3em' },
  'pdR.5e': { paddingRight: '.5em' },
  pdR1e: { paddingRight: '1em' },
  pdR2e: { paddingRight: '2em' },
  pdR3e: { paddingRight: '3em' },
  'pdB.5e': { paddingBottom: '.5em' },
  pdB1e: { paddingBottom: '1em' },
  pdB2e: { paddingBottom: '2em' },
  pdB3e: { paddingBottom: '3em' },
  'pdL.5e': { paddingLeft: '.5em' },
  pdL1e: { paddingLeft: '1em' },
  pdL2e: { paddingLeft: '2em' },
  pdL3e: { paddingLeft: '3em' },

  // layout grid: margin
  mg0: { margin: 0 },
  mgT0: { marginTop: 0 },
  mgR0: { marginRight: 0 },
  mgB0: { marginBottom: 0 },
  mgL0: { marginLeft: 0 },

  'mg.5r': { margin: '.5rem' },
  mg1r: { margin: '1rem' },
  mg2r: { margin: '2rem' },
  mg3r: { margin: '3rem' },
  'mgT.5r': { marginTop: '.5rem' },
  mgT1r: { marginTop: '1rem' },
  mgT2r: { marginTop: '2rem' },
  mgT3r: { marginTop: '3rem' },
  'mgR.5r': { marginRight: '.5rem' },
  mgR1r: { marginRight: '1rem' },
  mgR2r: { marginRight: '2rem' },
  mgR3r: { marginRight: '3rem' },
  'mgB.5r': { marginBottom: '.5rem' },
  mgB1r: { marginBottom: '1rem' },
  mgB2r: { marginBottom: '2rem' },
  mgB3r: { marginBottom: '3rem' },
  'mgL.5r': { marginLeft: '.5rem' },
  mgL1r: { marginLeft: '1rem' },
  mgL2r: { marginLeft: '2rem' },
  mgL3r: { marginLeft: '3rem' },

  'mg.5e': { margin: '.5em' },
  mg1e: { margin: '1em' },
  mg2e: { margin: '2em' },
  mg3e: { margin: '3em' },
  'mgT.5e': { marginTop: '.5em' },
  mgT1e: { marginTop: '1em' },
  mgT2e: { marginTop: '2em' },
  mgT3e: { marginTop: '3em' },
  'mgR.5e': { marginRight: '.5em' },
  mgR1e: { marginRight: '1em' },
  mgR2e: { marginRight: '2em' },
  mgR3e: { marginRight: '3em' },
  'mgB.5e': { marginBottom: '.5em' },
  mgB1e: { marginBottom: '1em' },
  mgB2e: { marginBottom: '2em' },
  mgB3e: { marginBottom: '3em' },
  'mgL.5e': { marginLeft: '.5em' },
  mgL1e: { marginLeft: '1em' },
  mgL2e: { marginLeft: '2em' },
  mgL3e: { marginLeft: '3em' },

  // background color
  bgInherit: { backgroundColor: 'inherit' },
  bg_primary: { backgroundColor: colors.primary },
  bg_success: { backgroundColor: colors.success },
  bg_disable: { backgroundColor: colors.disable },
  bg_info: { backgroundColor: colors.info },
  bg_danger: { backgroundColor: colors.danger },
  bg_warning: { backgroundColor: colors.warning },
  bg_cancel: { backgroundColor: colors.cancel },
  bg_no: { backgroundColor: colors.no },

  // color
  cl_no: { color: colors.no },
  cl_primary: { color: colors.primary },
  cl_success: { color: colors.success },
  cl_disable: { color: colors.disable },
  cl_info: { color: colors.info },
  cl_danger: { color: colors.danger },
  cl_warning: { color: colors.warning },
  cl_cancel: { color: colors.cancel },

  // color: (value) => `cl_${value}`

  // border style
  bd_s_solid: { borderStyle: 'solid' },
  bd_s_none: { borderStyle: 'none' },

  // box-shadow
  bs_none: { boxShadow: 'none' },

  // border size
  bd_w_1: { borderWidth: 1 },
  bd_w_2: { borderWidth: 2 },

  // border size
  bd_c_default: { borderColor: colors.defaultBorder },
  // bd_w_2: {borderWidth: 2},

  // border radius
  bd_r_0: { borderRadius: 0 },
  bd_rTL_0: { borderTopLeftRadius: 0 },
  bd_rBL_0: { borderBottomLeftRadius: 0 },
  bd_rTR_0: { borderTopRightRadius: 0 },
  bd_rBR_0: { borderBottomRightRadius: 0 },
  bd_r_5: { borderRadius: 5 },
  bd_rTL_5: { borderTopLeftRadius: 5 },
  bd_rBL_5: { borderBottomLeftRadius: 5 },
  bd_rTR_5: { borderTopRightRadius: 5 },
  bd_rBR_5: { borderBottomRightRadius: 5 },
  bd_r_10: { borderRadius: 10 },

  // font size
  'f.5r': { fontSize: '.5rem' },
  'f.75r': { fontSize: '.75rem' },
  'f.8125r': { fontSize: '.8125rem' },
  'f.875r': { fontSize: '.875rem' },
  f1r: { fontSize: '1rem' },
  'f1.125r': { fontSize: '1.125rem' },
  'f1.25r': { fontSize: '1.25rem' },
  'f1.5r': { fontSize: '1.5rem' },
  'f1.75r': { fontSize: '1.75rem' },
  'f1.8125r': { fontSize: '1.8125rem' },
  f2r: { fontSize: '2rem' },
  f3r: { fontSize: '3rem' },

  'f.5e': { fontSize: '.5em' },
  'f.75e': { fontSize: '.75em' },
  'f.8125e': { fontSize: '.8125em' },
  'f.875e': { fontSize: '.875em' },
  f1e: { fontSize: '1em' },
  'f1.125e': { fontSize: '1.125em' },
  'f1.25e': { fontSize: '1.25em' },
  'f1.5e': { fontSize: '1.5em' },
  'f1.75e': { fontSize: '1.75em' },
  'f1.8125e': { fontSize: '1.8125em' },
  f2e: { fontSize: '2em' },
  f3e: { fontSize: '3em' },
  // font weight
  fw300: { fontWeight: 300 },
  fw400: { fontWeight: 400 },
  fw500: { fontWeight: 500 },
  fw600: { fontWeight: 600 },

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

  // justifyContent
  jc_st: { justifyContent: 'flex-start' },
  jc_ed: { justifyContent: 'flex-end' },
  jc_ct: { justifyContent: 'center' },

  // align-item

  ai_st: { alignItems: 'flex-start' },
  ai_ed: { alignItems: 'flex-end' },
  ai_ct: { alignItems: 'center' },

  // width
  wd_f: { width: '100%' },
  wd_fs: { width: '100vh' },

  // text-align
  ta_l: { textAlign: 'left' },
  ta_c: { textAlign: 'center' },
  ta_r: { textAlign: 'right' },

  // vertical-align
  va_t: { verticalAlign: 'top' },
  va_b: { verticalAlign: 'bottom' },
  va_m: { verticalAlign: 'middle' },

  // position
  ps_a: { position: 'absolute' },
  ps_r: { position: 'relative' },
  ps_f: { position: 'fix' },
  ps_s: { position: 'static' },
};

// break pointer for responsive
export const smallBreakpoint = 576;
export const mediumBreakpoint = 768;
export const largeBreakpoint = 992;
export const xLargeBreakpoint = 1200;
