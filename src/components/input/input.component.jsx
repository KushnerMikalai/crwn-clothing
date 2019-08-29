import React from 'react';

import './input.styles.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.handleClickLabel = this.handleClickLabel.bind(this);

    this.state = {
      value: '',
      focused: null,
      hasValue: null
    }
  }

  handleFocus = () => {
    this.setState({ focused: true })
  };

  handleBlur = event => {
    this.setState({ focused: null });
    const { value } = event.target;
    if (value) {
      this.setState({ hasValue: true });
    } else {
      this.setState({ hasValue: null });
    }
  };

  handleClickLabel() {
    this.input.current.focus();
  }

  render() {
    const { focused, hasValue } = this.state;
    const { handleChange, label, ...otherProps } = this.props;
    return (
      <div className={`input${focused ? ' focused' : ''}${hasValue ? ' shrink' : ''}`}>
        <input
          ref={this.input}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={handleChange}
          className={'input__el'}
          {...otherProps}
        />
        {
          label ?
            (<div onClick={this.handleClickLabel} className="input__label">
              {label}
            </div>)
            : null
        }
      </div>
    )
  }
}

export default Input;
