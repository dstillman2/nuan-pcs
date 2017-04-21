import React, { Component } from 'react';

/**
 * Dropdown uncontrolled component
 */
class Dropdown extends Component {
  /**
   * Returns field value
   * @returns {String} {null} string value if present, otherwise null
   */
  getValue() {
    console.log('get value')
    console.log(this.field.value)
    return this.field.value || null;
  }

  /**
   * React render method
   * @returns {Object} jsx dropdown menu
   */
  render() {
    const display = this.props.hide ? { display: 'none' }: {};

    return (
      <div className="form-group" style={display}>
        {
          this.props.label && (
            <label htmlFor={this.props.uniqueIdentifier}>{this.props.label}</label>
          )
        }
        <select
          className="form-control"
          id={this.props.uniqueIdentifier}
          ref={(c) => { this.field = c; }}
          name={this.props.name}
          onChange={this.props.onChange}
        >
          {
            this.props.defaultSelected ? (
              <option value="" disabled selected>
                {this.props.defaultSelected}]
              </option>
            ) : null
          }
          {
            this.props.options.map((option, index) => (
              <option key={option.key || index} value={option.value}>{option.label}</option>
            ))
          }
        </select>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  onChange: null,
  defaultValue: null,
  defaultSelected: null,
  label: null,
  name: null,
  uniqueIdentifier: Math.random().toString(),
};

export default Dropdown;
