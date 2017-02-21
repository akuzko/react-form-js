import React, { PropTypes } from 'react';

export default function Checkbox(props) {
  const {
    value,
    onChange,
    error,
    label,
    labelPosition,
    className,
    inputClassName,
    errorClassName,
    ...rest
  } = props;

  // labelPosition is not placed in defaultProps in order for it to be
  // overridable in RadioButtonGroup
  const actualPosition = labelPosition || 'after';

  return (
    <label className={className}>
      {actualPosition === 'before' && label}

      <input
        type="checkbox"
        value="1"
        checked={!!value}
        onChange={(e) => onChange(e.target.checked, e)}
        className={inputClassName}
        {...rest}
      />

      {actualPosition === 'after' && label}

      {error &&
        <div className={errorClassName}>{error}</div>
      }
    </label>
  );
}

Checkbox.propTypes = {
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  error: PropTypes.string,
  label: PropTypes.node,
  labelPosition: PropTypes.oneOf(['before', 'after']),
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string
};

Checkbox.defaultProps = {
  value: false,
  errorClassName: 'error'
};
