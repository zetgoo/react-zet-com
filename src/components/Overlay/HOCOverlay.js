import React, { PureComponent } from 'react';
import Radium from 'radium';

const HOCOverlay = Overlay => {
  class Enhancer extends PureComponent {
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
  return Radium(Enhancer);
};
export default HOCOverlay;
