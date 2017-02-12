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
      <div className="container">
        <div className="paper p-20 mt-20 mb-20">
          <div className="horizontal-container">
            <div className="flex-item three mr-20">

              <div className="horizontal-container mb-20">
                <div className="flex-item two mr-20"></div>
                <div className="flex-item">
                  <TextField {...$('textField')} placeholder="TextField" label="Label:" className="block mb-10" inputClassName="form-control" />
                </div>
              </div>

              <div className="horizontal-container mb-20">
                <div className="flex-item two mr-20"></div>
                <div className="flex-item">
                  <TextArea {...$('TextArea')} placeholder="TextArea" label="Description:" className="block" inputClassName="form-control" />
                </div>
              </div>


              <div className="horizontal-container mb-20">
                <div className="flex-item two mr-20"></div>
                <div className="flex-item">
                  <Select {...$('select')} options={[1, 2, 3]} includeBlank="Select..." label="Item:" className="block" inputClassName="form-control" />
                </div>
              </div>

              <div className="horizontal-container mb-20">
                <div className="flex-item two mr-20"></div>
                <div className="flex-item">
                  <Checkbox {...$('checkbox')} label={<span>Checkbox</span>} className="block checkbox" />
                </div>
              </div>

              <div className="horizontal-container mb-20">
                <div className="flex-item two mr-20"></div>
                <div className="flex-item">
                  <RadioButtonGroup className="horizontal-container" {...$('radio')}>
                    <RadioButton className="radio mr-20" value="value1" label={<span>Value 1</span>} />
                    <RadioButton className="radio mr-20" value="value2" label={<span>Value 2</span>} />
                    <RadioButton className="radio" value="value3" label={<span>Value 3</span>} />
                  </RadioButtonGroup>
                </div>
              </div>
            </div>

            <div className="flex-item">

            </div>
          </div>
        </div>
      </div>
    );
  }
}
