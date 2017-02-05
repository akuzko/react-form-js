import React, { PropTypes, Children } from 'react';
import RadioButton from './RadioButton';

export default function RadioButtonGroup(props) {
  const {
    value,
    onChange,
    error,
    className,
    inputClassName,
    errorClassName,
    children,
    ...rest
  } = props;

  return (
    <div className={className}>
      {Children.map(children, (element) => {
        const radioValue = element.props.value;

        return element.type === RadioButton ?
          React.cloneElement(element, {
            ...rest,
            className: inputClassName,
            checked: radioValue == value,
            onClick: function(e) { return onChange(radioValue, e); }
          }) :
          element;
      })}
      {error &&
        <div className={errorClassName}>{error}</div>
      }
    </div>
  );
}

RadioButtonGroup.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string
};
