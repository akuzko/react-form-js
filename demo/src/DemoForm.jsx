import React from 'react';
import Form, {
  TextField,
  TextArea,
  Select,
  Checkbox,
  RadioButtonGroup,
  RadioButton
} from '../../src';

export default class DemoForm extends Form {
  $render($) {
    return (
      <div>
        <TextField {...$('textField')} placeholder="TextField" label="Label:" className="input" />

        <TextArea {...$('TextArea')} placeholder="TextArea" label="Description:" className="input" />

        <Select {...$('select')} options={[1, 2, 3]} includeBlank="Select..." label="Item:" className="input" />

        <Checkbox {...$('checkbox')} label="Checkbox" className="input" />

        <RadioButtonGroup {...$('radio')}>
          <RadioButton value="value1" label="Value 1" />
          <RadioButton value="value2" label="Value 2" />
          <RadioButton value="value3" label="Value 3" />
        </RadioButtonGroup>
      </div>
    );
  }
}
