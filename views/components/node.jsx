import React, { Component } from 'react';

import Guide from './guide';
import Survey from './survey';

class NodeComponent extends Component {
  render() {
    let showBreadcrumbs, showHeading, renderNode;

    if (this.props.config.breadcrumbs) {
      showBreadcrumbs = (
        <div className="breadcrumbs">
          {
            this.props.config.breadcrumbs.map((item) => {
              return (
                <li key={item.name}><a href="#">{item.name}</a></li>
              );
            })
          }
        </div>
      );
    }

    switch (this.props.config.type) {
      case 'guide':
        renderNode = <Guide content={this.props.config.content} onClick={this.props.onClick} />;
        break;
      case 'survey':
        renderNode = <Survey content={this.props.config.content} onClick={this.props.onClick} />;
        break;
      default:
        renderNode = null;
        break;
    }

    return (
      <div className="body">
        {showBreadcrumbs}
        <div className="heading">
          {this.props.config.heading}
        </div>
        {renderNode}
      </div>
    )
  }
}

NodeComponent.defaultProps = {
  config: {},
}

export default NodeComponent;
