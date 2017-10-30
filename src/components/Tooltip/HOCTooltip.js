import React, { PureComponent } from 'react';

const HOCTooltip = Tooltip => {
  class Enhancer extends PureComponent {
    constructor() {
      super();
      this.state = { isShow: false };
    }
    handleHover = () => {
      this.setState({ isShow: true });
    };
    handleLeave = () => {
      this.setState({ isShow: false });
    };
    render() {
      return (
        <Tooltip
          {...this.props}
          onShow={this.handleHover}
          onHide={this.handleLeave}
          isShow={this.state.isShow}
        />
      );
    }
  }
  return Enhancer;
};
export default HOCTooltip;
