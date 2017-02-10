import React, { PropTypes } from 'react';

export default function RadioButton(props) {
  const { label, className, inputClassName, labelPosition, children, ...rest } = props;
  // labelPosition is not placed in defaultProps in order for it to be
  // overridable in RadioButtonGroup
  const actualPosition = labelPosition || 'after';

  return (
    <label className={className}>
      {actualPosition == 'before' && (children || label)}
      <input type="radio" className={inputClassName} { ...rest } />
      {actualPosition == 'after' && (children || label)}
    </label>
  );
}

RadioButton.propTypes = {
  label: PropTypes.node,
  labelPosition: PropTypes.oneOf(['before', 'after']),
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  children: PropTypes.node
};

RadioButton.defaultProps = {
  className: '',
  inputClassName: ''
};
