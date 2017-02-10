import React, { PropTypes } from 'react';

export default function Select(props) {
  const {
    value,
    error,
    onChange,
    options,
    includeBlank,
    label,
    labelPosition,
    className,
    inputClassName,
    errorClassName,
    children,
    ...rest
  } = props;

  return (
    <label className={className}>
      {labelPosition === 'before' && label}

      <select value={value} onChange={(e) => onChange(e.target.value, e)} className={inputClassName} {...rest}>
        {children}
        {!children && includeBlank &&
          <option value="">{typeof includeBlank === 'string' ? includeBlank : 'None'}</option>
        }
        {!children && options.map((option, i) => {
          const { value, label } = typeof option === 'object' ? option : { value: option, label: option };

          return <option key={i} value={value}>{label}</option>;
        })}
      </select>

      {labelPosition === 'after' && label}

      {error &&
        <div className={errorClassName}>{error}</div>
      }
    </label>
  );
}

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })])).isRequired,
  includeBlank: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.node,
  labelPosition: PropTypes.oneOf(['before', 'after']),
  children: PropTypes.node,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string
};

Select.defaultProps = {
  value: '',
  options: [],
  includeBlank: false,
  labelPosition: 'before',
  className: '',
  inputClassName: '',
  errorClassName: 'error'
};
