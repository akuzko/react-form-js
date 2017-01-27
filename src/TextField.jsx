import React, { PropTypes } from 'react';

export default function TextField(props) {
  const { value, error, onChange, className, inputClassName, errorClassName, ...rest } = props;

  return (
    <div className={className}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClassName}
        {...rest}
      />

      {error &&
        <div className={errorClassName}>{error}</div>
      }
    </div>
  );
}

TextField.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string
};

TextField.defaultProps = {
  errorClassName: 'error'
};
