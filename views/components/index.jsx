import React, { Component } from 'react';

import NodeElement from './node';

/**
 * Survey component. This is the main component that receives the configuration
 * file and passes it down to the children components.
 */
class Index extends Component {
  /**
   * React component constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    // Hard coded current node. The current node can be changed by editing the
    // config.js file.
    this.state = {
      currentNode: props.config.initialNode,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    // Hard coded node routing
    this.setState({
      currentNode: e === 'guide' ? 1 : 2,
    });
  }

  /**
   * Render component. Returns the overall React survey component.
   * @returns {void}
   */
  render() {
    const currentNode = this.props.config.nodes[this.state.currentNode];

    return (
      <div
        id="chatbox"
        style={{ width: currentNode.width, height: currentNode.height }}>
        <div className="header">
          <div className="logo">
            <img src="./dist/img/logo-best-brands.png"></img>
          </div>
          <button className="btn-close">
            <img src="./dist/img/btn-close.png"></img>
          </button>
        </div>
        <NodeElement config={currentNode} onClick={this.onClick} />
        <div className="footer">
          <div className="logo">
            <img src="./dist/img/logo-tc.png"></img>
          </div>
        </div>
      </div>
    )
  }
}

Index.defaultProps = {
  config: {},
};

export default Index;
