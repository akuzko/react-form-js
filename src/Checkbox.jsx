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

  return (
    <label className={className}>
      {labelPosition === 'before' && label}

      <input
        type="checkbox"
        value="1"
        checked={!!value}
        onChange={(e) => onChange(e.target.checked, e)}
        className={inputClassName}
        {...rest}
      />

      {labelPosition === 'after' && label}

      {error &&
        <div className={errorClassName}>{error}</div>
      }
    </label>
  );
}

Checkbox.propTypes = {
  value: PropTypes.bool,
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
  labelPosition: 'after',
  className: '',
  inputClassName: '',
  errorClassName: 'error'
};
