import React, { Component } from 'react';

class Guide extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    console.log(this.props.content);
  }

  render() {
    return (
      <div className="guide">
        {
          this.props.content.links.map((item) => {
            return (
              <li className="guide-li">
                <a href="#" onClick={() => this.props.onClick('guide')}>
                  <div className="fake-img"></div>
                  {item.name}
                </a>
              </li>
            )
          })
        }
      </div>
    );
  }
}

export default Guide;
