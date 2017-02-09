import React, { PropTypes } from 'react';

export default function TextField(props) {
  const {
    value,
    onChange,
    error,
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
        onChange={(e) => onChange(e.target.value, e)}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  error: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string
};

TextField.defaultProps = {
  value: '',
  className: '',
  inputClassName: '',
  errorClassName: 'error'
};
