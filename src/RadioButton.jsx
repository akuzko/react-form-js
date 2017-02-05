import React, { PropTypes } from 'react';

export default function RadioButton(props) {
  const { label, labelClassName, ...rest } = props;

  return (
    <label className={labelClassName}>
      <input type="radio" { ...rest } />
      {label}
    </label>
  );
}

RadioButton.propTypes = {
  label: PropTypes.string,
  labelClassName: PropTypes.string
};
