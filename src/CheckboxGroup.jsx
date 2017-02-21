import React, { PropTypes, Children } from 'react';
import Checkbox from './Checkbox';

export default function CheckboxGroup(props) {
  const {
    value = [],
    onChange,
    error,
    labelPosition,
    className,
    checkboxClassName,
    inputClassName,
    errorClassName,
    children,
    ...rest
  } = props;

  return (
    <div className={className}>
      {Children.map(children, (element) => {
        const inputValue = element.props.value;

        return element.type === Checkbox ?
          React.cloneElement(element, {
            ...rest,
            className: element.props.className || checkboxClassName,
            inputClassName: element.props.inputClassName || inputClassName,
            labelPosition: element.props.labelPosition || labelPosition,
            value: value.includes(inputValue),
            onChange: function(checked, e) {
              return onChange(checked ? [...value, inputValue] : value.filter(v => v !== inputValue), e);
            }
          }) :
          element;
      })}
      {error &&
        <div className={errorClassName}>{error}</div>
      }
    </div>
  );
}

CheckboxGroup.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  onChange: PropTypes.func,
  error: PropTypes.string,
  labelPosition: PropTypes.oneOf(['before', 'after']),
  children: PropTypes.node,
  className: PropTypes.string,
  checkboxClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string
};

CheckboxGroup.defaultProps = {
  labelPosition: 'after',
  errorClassName: 'error'
};
