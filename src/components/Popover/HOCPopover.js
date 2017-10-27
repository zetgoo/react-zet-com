import React, { PureComponent } from 'react';

const HOCPopover = Popover => {
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
        <Popover
          {...this.props}
          onShow={this.handleClick}
          isShow={this.state.isShow}
        />
      );
    }
  }
  return Enhancer;
};
export default HOCPopover;
