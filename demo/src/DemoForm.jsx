import React from 'react';
import Source from './Source';
import Form, {
  TextField,
  TextArea,
  Select,
  Checkbox,
  RadioButtonGroup,
  RadioButton
} from '../../src';

export default class DemoForm extends Form {
  makeInvalid(name) {
    this.setErrors({ ...this.getErrors(), [name]: 'is invalid' });
  }

  $render($) {
    return (
      <div className="container">
        <div className="paper p-20 mt-20 mb-20">
          <div className="horizontal-container">
            <div className="flex-item three mr-20">
              <div className="horizontal-container mb-20">
                <div className="flex-item two mr-20">
                  <Source code={`
                    <TextField
                      {...$('fullName')}
                      placeholder="Full Name"
                      label="TextField"
                      className="block mb-10"
                      inputClassName="form-control"
                    />
                  `} />
                </div>
                <div className="flex-item">
                  <TextField {...$('fullName')} placeholder="Full Name" label="TextField" className="block mb-10" inputClassName="form-control" />
                  <button onClick={this.makeInvalid.bind(this, 'fullName')}>Validate</button>
                </div>
              </div>

              <div className="horizontal-container mb-20">
                <div className="flex-item two mr-20">
                  <Source code={`
                    <TextArea
                      {...$('description')}
                      placeholder="Description"
                      label="TextArea"
                      className="block"
                      inputClassName="form-control"
                    />
                  `} />
                </div>
                <div className="flex-item">
                  <TextArea {...$('description')} placeholder="Description" label="TextArea" className="block" inputClassName="form-control" />
                  <button onClick={this.makeInvalid.bind(this, 'description')}>Validate</button>
                </div>
              </div>


              <div className="horizontal-container mb-20">
                <div className="flex-item two mr-20">
                  <Source code={`
                    <Select
                      {...$('position')}
                      options={[1, 2, 3]}
                      includeBlank="Position..."
                      label="Select"
                      className="block"
                      inputClassName="form-control"
                    />
                  `} />
                </div>
                <div className="flex-item">
                  <Select {...$('position')} options={[1, 2, 3]} includeBlank="Position..." label="Select" className="block" inputClassName="form-control" />
                  <button onClick={this.makeInvalid.bind(this, 'position')}>Validate</button>
                </div>
              </div>

              <div className="horizontal-container mb-20">
                <div className="flex-item two mr-20">
                  <Source code={`
                    <Checkbox {...$('checkbox')} label={<span>Checkbox</span>} className="block checkbox" />
                  `} />
                </div>
                <div className="flex-item">
                  <Checkbox {...$('checkbox')} label={<span>Checkbox</span>} className="block checkbox" />
                  <button onClick={this.makeInvalid.bind(this, 'checkbox')}>Validate</button>
                </div>
              </div>

              <div className="horizontal-container mb-20">
                <div className="flex-item two mr-20">
                  <Source code={`
                    <RadioButtonGroup className="horizontal-container" {...$('radio')}>
                      <div>Favorite Color</div>
                      <RadioButton className="radio mr-20" value="red" label={<span>Red</span>} />
                      <RadioButton className="radio mr-20" value="green" label={<span>Green</span>} />
                      <RadioButton className="radio" value="blue" label={<span>Blue</span>} />
                    </RadioButtonGroup>
                  `} />
                </div>
                <div className="flex-item">
                  <RadioButtonGroup className="horizontal-container" {...$('radio')}>
                    <div>Favorite Color</div>
                    <RadioButton className="radio mr-20" value="red" label={<span>Red</span>} />
                    <RadioButton className="radio mr-20" value="green" label={<span>Green</span>} />
                    <RadioButton className="radio" value="blue" label={<span>Blue</span>} />
                  </RadioButtonGroup>
                  <button onClick={this.makeInvalid.bind(this, 'radio')}>Validate</button>
                </div>
              </div>
            </div>

            <div className="flex-item">
              <pre>attrs: {JSON.stringify(this.props.attrs, null, '  ')}</pre>
              <pre>errors: {JSON.stringify(this.state.errors, null, '  ')}</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
