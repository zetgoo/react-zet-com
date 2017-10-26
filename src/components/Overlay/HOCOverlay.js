import React, { Component, PureComponent } from 'react';

const HOCOverlay = Overlay => {
  class Enhancer extends Component {
    constructor() {
      super();
      this.state = { isShow: false };
    }
    handleClick = () => {
      this.setState({ isShow: !this.state.isShow });
    };
    render() {
      return (
        <Overlay
          {...this.props}
          onShow={this.handleClick}
          isShow={this.state.isShow}
        />
      );
    }
  }
  return Enhancer;
};
export default HOCOverlay;
