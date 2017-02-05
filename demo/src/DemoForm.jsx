import React from 'react';
// import Form, { TextField, Select } from 'react-form-js';
import Form, { TextField, Select, Checkbox, RadioButtonGroup, RadioButton } from '../../src';

export default class DemoForm extends Form {
  $render($) {
    return (
      <div>
        <TextField {...$('textField')} placeholder="TextField" />
        <Select {...$('select')} options={[1, 2, 3]} includeBlank="Select..." />
        <Checkbox {...$('checkbox')} label="Checkbox" />
        <RadioButtonGroup {...$('radio')}>
          <RadioButton value="value1" label="Value 1" />
          <RadioButton value="value2" label="Value 2" />
          <RadioButton value="value3" label="Value 3" />
        </RadioButtonGroup>
      </div>
    );
  }
}
