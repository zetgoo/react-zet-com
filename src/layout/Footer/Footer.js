import React from 'react'

const Footer = ()=> {
  const styles = {
    base: {
      backgroundColor: '#fff'
    }
  }

  return (
    <footer>
      <h1>welcome to zetgo</h1>
    </footer>
  )
}

Footer.propTypes = {
  zcss: PropTypes.array
}

export default Radium(Footer)
