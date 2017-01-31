import React from 'react';
// import Form, { TextField, Select } from 'react-form-js';
import Form, { TextField, Select, Checkbox } from '../../src';

export default class DemoForm extends Form {
  $render($) {
    return (
      <div>
        <TextField {...$('textField')} placeholder="TextField" />
        <Select {...$('select')} options={[1, 2, 3]} includeBlank="Select..." />
        <Checkbox {...$('checkbox')} />
      </div>
    );
  }
}
