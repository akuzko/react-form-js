import React, { PropTypes } from 'react';

export default function Checkbox(props) {
  const { value, onChange, error, className, inputClassName, errorClassName, ...rest } = props;

  return (
    <div className={className}>
      <input
        type="checkbox"
        value="1"
        checked={!!value}
        onChange={(e) => onChange(e.target.checked)}
        className={inputClassName}
        {...rest}
      />

      {error &&
        <div className={errorClassName}>{error}</div>
      }
    </div>
  );
}

Checkbox.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string
};

Checkbox.defaultPropTypes = {
  value: false,
  errorClassName: 'error'
};
