import React, { PropTypes } from 'react';

export default function TextField(props) {
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
        value={value}
        onChange={(e) => onChange(e.target.value, e)}
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

TextField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  error: PropTypes.string,
  label: PropTypes.node,
  labelPosition: PropTypes.oneOf(['before', 'after']),
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string
};

TextField.defaultProps = {
  value: '',
  labelPosition: 'before',
  className: '',
  inputClassName: '',
  errorClassName: 'error'
};
