import React, { Component } from 'react';

import Textbox from './textbox';
import Textarea from './textarea';
import Dropdown from './dropdown';

class Survey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: {},
      hide: {},
    };

    this.props.content.fields.forEach((field) => {
      if (field.hidden) {
        this.state.hide[field.label] = true;
      }
    });

    this.validateFields = this.validateFields.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    // focus first form group item
    document.querySelector('.form-group>input').focus();
  }

  validateFields(e) {
    e.preventDefault();
    let flag = true;

    this.props.content.fields.forEach((field) => {
      if (!field.onError) {
        return;
      }

      const value = this[field.label].getValue();

      for (let i = 0; i < field.onError.length; i++) {
        if (field.onError[i].test(value)) {
          this.setState({
            [field.label]: null,
          });
        } else {
          this.setState({
            [field.label]: field.onError[i].error,
          });

          flag = false;

          break;
        }
      }
    });

    if (flag) {
      this.props.onClick('survey');
    }
  }

  onChange() {
    this.props.content.fields.forEach((field) => {
      if (!field.show) {
        return;
      }

      field.show.forEach(item => {
        this.setState({
          hide: {
            [item.label]: this[field.label].getValue() === item.value ? false : true,
          },
        });
      });
    });
  }

  render() {
    return (
      <div className="survey">
        {
          this.props.content.fields.map((field) => {
            switch (field.fieldType) {
              case 'textbox':
                return (
                  <Textbox
                    showError={this.state[field.label]}
                    ref={(c) => { this[field.label] = c; }}
                    label={field.label}
                    placeholder={field.placeholder}
                  />
                )
              case 'textarea':
                return (
                  <Textarea
                    ref={(c) => { this[field.label] = c; }}
                    label={field.label}
                    rows={field.rows}
                  />
                )
              case 'dropdown': {
                return (
                  <Dropdown
                    hide={this.state.hide[field.label]}
                    onChange={this.onChange}
                    ref={(c) => { this[field.label] = c; }}
                    label={field.label}
                    options={field.data}
                    defaultValue={field.defaultValue}
                  />
                )
              }
            }
          })
        }
        <div style={{marginBottom:55}}>
          <div>
            <button className="btn-submit" onClick={this.validateFields}>
              Start Chat
            </button>
          </div>
          <div className="required-field">* Required field</div>
        </div>
      </div>
    );
  }
}

export default Survey;
