import React, { PropTypes, Children } from 'react';
import RadioButton from './RadioButton';

export default function RadioButtonGroup(props) {
  const {
    value,
    onChange,
    error,
    labelPosition,
    className,
    radioClassName,
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
            className: element.props.className || radioClassName,
            inputClassName: element.props.inputClassName || inputClassName,
            labelPosition: element.props.labelPosition || labelPosition,
            checked: radioValue == value,
            onChange: function(e) { return onChange(radioValue, e); }
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
  labelPosition: PropTypes.oneOf(['before', 'after']),
  children: PropTypes.node,
  className: PropTypes.string,
  radioClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string
};

RadioButtonGroup.defaultProps = {
  labelPosition: 'after',
  className: '',
  radioClassName: '',
  inputClassName: '',
  errorClassName: 'error'
};
