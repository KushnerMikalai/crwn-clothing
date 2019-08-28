import React from 'react';

import './input.styles.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.handleClickPlaceholder = this.handleClickPlaceholder.bind(this);

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

  handleClickPlaceholder() {
    this.input.current.focus();
  }

  onFieldChange = event => {
    this.props.onChange(event);
  };

  render() {
    const { focused, hasValue } = this.state;
    const { placeholder, name, type, textValue, className, button } = this.props;
    return (
      <div className={`input${focused ? ' focused' : ''}${hasValue ? ' hasValue' : ''}${button ? ' input--button' : ''}`}>
        <input
          ref={this.input}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={this.onFieldChange}
          className={'input__el'}
          name={name}
          type={type}
          value={textValue || ''}
        />
        {placeholder ? <div onClick={this.handleClickPlaceholder} className="input__placeholder">{placeholder}</div> : ''}
      </div>
    )
  }
}

export default Input;
