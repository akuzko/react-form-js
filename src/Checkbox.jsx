import React, { PropTypes } from 'react';

export default function Checkbox(props) {
  const { value, onChange, error, label, className, inputClassName, errorClassName, ...rest } = props;

  return (
    <label className={className}>
      <input
        type="checkbox"
        value="1"
        checked={!!value}
        onChange={(e) => onChange(e.target.checked)}
        className={inputClassName}
        {...rest}
      />

      {label}

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
  label: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string
};

Checkbox.defaultPropTypes = {
  value: false,
  errorClassName: 'error'
};
