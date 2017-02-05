import React, { PropTypes } from 'react';

export default function TextField(props) {
  const {
    value,
    error,
    onChange,
    label,
    children,
    className,
    inputClassName,
    errorClassName,
    ...rest
  } = props;

  return (
    <label className={className}>
      {children || label}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClassName}
        {...rest}
      />

      {error &&
        <div className={errorClassName}>{error}</div>
      }
    </label>
  );
}

TextField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  error: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string
};

TextField.defaultProps = {
  value: '',
  errorClassName: 'error'
};
