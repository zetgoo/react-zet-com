import React, { Component } from 'react';

const HOCPopover = Popover => {
  class Enhancer extends Component {
    constructor() {
      super();
      this.state = { isShow: false, appIsMounted: false };
    }

    componentDidMount = () => {
      this.setState({ appIsMounted: true });
    };

    handleClick = () => {
      this.setState({ isShow: !this.state.isShow });
    };

    render() {
      return !this.state.appIsMounted ? (
        <div />
      ) : (
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
