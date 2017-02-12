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
      <div className="horizontal-container">
        <div className="flex-item mr-20">
          <div className="paper p-20 mb-20">
            <h1>React Form JS Demo</h1>
            <div className="mb-20">
              This small demo app shows a basic usage examples of components provided
              by <a href="https://github.com/akuzko/react-form-js">react-form-js</a>.
              For a showcase of features of form itself, please
              visit <a href="https://akuzko.github.io/react-form-base/">react-form-base</a>.
            </div>
            <div className="mb-20">
              Each input component bellow is rendered within a single form. Also,
              for each of those inputs there is a "Validate" button that will
              invalidate corresponding input. Note that since form
              has <code>validateOnChange</code> property enabled (which is default
              behavior), each error will be cleared on input change.
            </div>
            <div>
              To the rightmost section of the page form renders its attributes
              (<code>this.props.attrs</code>) and errors (<code>this.state.errors</code>)
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20">
              <Source code={`
                <TextField
                  {...$('fullName')}
                  placeholder="Full Name"
                  label="TextField"
                  className="block mb-20"
                  inputClassName="form-control"
                />`}
              />
            </div>
            <div className="flex-item">
              <TextField {...$('fullName')} placeholder="Full Name" label="TextField" className="block mb-20" inputClassName="form-control" />
              <button className="btn green" onClick={this.makeInvalid.bind(this, 'fullName')}>Validate</button>
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20">
              <Source code={`
                <TextArea
                  {...$('description')}
                  placeholder="Description"
                  label="TextArea"
                  className="block mb-20"
                  inputClassName="form-control"
                />`}
              />
            </div>
            <div className="flex-item">
              <TextArea {...$('description')} placeholder="Description" label="TextArea" className="block mb-20" inputClassName="form-control" />
              <button className="btn green" onClick={this.makeInvalid.bind(this, 'description')}>Validate</button>
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20">
              <Source code={`
                <Select
                  {...$('position')}
                  options={[1, 2, 3]}
                  includeBlank="Position..."
                  label="Select"
                  className="block mb-20"
                  inputClassName="form-control"
                />`}
              />
            </div>
            <div className="flex-item">
              <Select {...$('position')} options={[1, 2, 3]} includeBlank="Position..." label="Select" className="block mb-20" inputClassName="form-control" />
              <button className="btn green" onClick={this.makeInvalid.bind(this, 'position')}>Validate</button>
            </div>
          </div>

          <div className="paper horizontal-container center p-20 mb-20">
            <div className="flex-item two mr-20">
              <Source code={`
                <Checkbox {...$('checkbox')} label={<span>Checkbox</span>} className="block checkbox mb-20" />`}
              />
            </div>
            <div className="flex-item">
              <Checkbox {...$('checkbox')} label={<span>Checkbox</span>} className="block checkbox mb-20" />
              <button className="btn green" onClick={this.makeInvalid.bind(this, 'checkbox')}>Validate</button>
            </div>
          </div>

          <div className="paper horizontal-container center p-20">
            <div className="flex-item two mr-20">
              <Source code={`
                <div className="mb-10">Favorite Color</div>
                <RadioButtonGroup className="horizontal-container relative radio-group mb-20" {...$('radio')}>
                  <RadioButton className="radio mr-20" value="red" label={<span>Red</span>} />
                  <RadioButton className="radio mr-20" value="green" label={<span>Green</span>} />
                  <RadioButton className="radio" value="blue" label={<span>Blue</span>} />
                </RadioButtonGroup>`}
              />
            </div>
            <div className="flex-item">
              <div className="mb-10">Favorite Color:</div>
              <RadioButtonGroup className="horizontal-container relative radio-group mb-20" {...$('radio')}>
                <RadioButton className="radio mr-20" value="red" label={<span>Red</span>} />
                <RadioButton className="radio mr-20" value="green" label={<span>Green</span>} />
                <RadioButton className="radio" value="blue" label={<span>Blue</span>} />
              </RadioButtonGroup>
              <button className="btn green" onClick={this.makeInvalid.bind(this, 'radio')}>Validate</button>
            </div>
          </div>
        </div>

        <div className="attrs">
          <div className="attrs-content">
            <pre>attrs: {JSON.stringify(this.props.attrs, null, '  ')}</pre>
            <pre>errors: {JSON.stringify(this.state.errors, null, '  ')}</pre>
          </div>
        </div>
      </div>
    );
  }
}
