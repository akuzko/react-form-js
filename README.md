Input Bindings for React Form Base
==================================

HTML input bindings for [react-form-base](https://github.com/akuzko/react-form-base).

## Installation

```
npm install --save react-form-js
```

## Usage

For a more detailed information on core functionality of `react-form-base`, take a
look at [it's demo](https://akuzko.github.io/react-form-base/). To see a sample
usage of this package components, you may want to look at [small demo](https://akuzko.github.io/react-form-js/).

### Example

```js
import Form, {
  TextField,
  TextArea,
  Select,
  Checkbox,
  RadioButtonGroup,
  RadioButton
} from 'react-form-js';

const ages = new Array(50).fill(10).map((n, i) => n + i);

export default class MyForm extends Form {
  render() {
    return (
      <div>
        <TextField {...this.$('fullName')} label="Full Name" />
        <TextArea {...this.$('description')} label="Description" />
        <Select {...this.$('age')} options={ages} includeBlank="Select..." />
        <RadioButtonGroup {...this.$('sex')}>
          <RadioButton value="male" label="Male" />
          <RadioButton value="female" label="Female" />
        </RadioButtonGroup>
        <Checkbox {...this.$('agree')} label="I Agree" />
      </div>
    );
  }
}
```

### Component Props

All of the components receive **value**, **onChange**, **error** and **name**
properties from `react-form-base` API. The latter is not directly used by components
except for `RadioButtonGroup` component, where it is required for component to work.

Bellow are the specs for other properties that components work with.

#### `TextField`

Wraps `<input type="text" />` HTML tag.

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>label</td>
      <td><code>PropTypes.node</code></td>
      <td>A label to be rendered near the input.</td>
    </tr>
    <tr>
      <td>labelPosition</td>
      <td><code>PropTypes.oneOf(['before', 'after'])</code><br/>Defaults to <code>'before'</code></td>
      <td>Specifies whether label should be rendered before or after input element.</td>
    </tr>
    <tr>
      <td>className</td>
      <td><code>PropTypes.string</code></td>
      <td>className for the root component element (which is a label).</td>
    </tr>
    <tr>
      <td>inputClassName</td>
      <td><code>PropTypes.string</code></td>
      <td>className for internal input element.</td>
    </tr>
    <tr>
      <td>errorClassname</td>
      <td><code>PropTypes.string</code>Defaults to <code>'error'</code></td>
      <td>className for internal error element (div), which is rendered if error is present.</td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to the nested <code>input[type="text"]</code> element.</td>
    </tr>
  </tbody>
</table>

#### `TextArea`

Wraps `<textarea />` HTML tag.

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>label</td>
      <td><code>PropTypes.node</code></td>
      <td>A label to be rendered near the textarea.</td>
    </tr>
    <tr>
      <td>labelPosition</td>
      <td><code>PropTypes.oneOf(['before', 'after'])</code><br/>Defaults to <code>'before'</code></td>
      <td>Specifies whether label should be rendered before or after textarea element.</td>
    </tr>
    <tr>
      <td>className</td>
      <td><code>PropTypes.string</code></td>
      <td>className for the root component element (which is a label)</td>
    </tr>
    <tr>
      <td>inputClassName</td>
      <td><code>PropTypes.string</code></td>
      <td>className for internal textarea element</td>
    </tr>
    <tr>
      <td>errorClassname</td>
      <td><code>PropTypes.string</code>Defaults to <code>'error'</code></td>
      <td>className for internal error element (div), which is rendered if error is present.</td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to the nested <code>textarea</code> element.</td>
    </tr>
  </tbody>
</table>

#### `Select`

Wraps `<select />` HTML tag.

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>options</td>
      <td>
        <pre><code>PropTypes.arrayOf(
  PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    })
  ])
).isRequired</code></pre>
      </td>
      <td>
        options to be rendered within internal select tag. If array of strings
        or integers is passed, it's values are used as options' texts and
        values. If array of objects is passed, each object should have
        <code>value</code> and <code>label</code> properties.
      </td>
    </tr>
    <tr>
      <td>children</td>
      <td><code>PropTypes.node</code></td>
      <td>Can be used to render options manually. Overrides <code>options</code> prop.</td>
    </tr>
    <tr>
      <td>includeBlank</td>
      <td><code>PropTypes.oneOfType([PropTypes.bool, PropTypes.string])</code></td>
      <td>
        Used to render option with blank value. If <code>true</code> is passed,
        renders "None" as option's text. If string is passed, renders it as option's text.
      </td>
    </tr>
    <tr>
      <td>label</td>
      <td><code>PropTypes.node</code></td>
      <td>A label to be rendered near the select element.</td>
    </tr>
    <tr>
      <td>labelPosition</td>
      <td><code>PropTypes.oneOf(['before', 'after'])</code><br/>Defaults to <code>'before'</code></td>
      <td>Specifies whether label should be rendered before or after select element.</td>
    </tr>
    <tr>
      <td>className</td>
      <td><code>PropTypes.string</code></td>
      <td>className for the root component element (which is a label).</td>
    </tr>
    <tr>
      <td>inputClassName</td>
      <td><code>PropTypes.string</code></td>
      <td>className for internal select element.</td>
    </tr>
    <tr>
      <td>errorClassname</td>
      <td><code>PropTypes.string</code>Defaults to <code>'error'</code></td>
      <td>className for internal error element (div), which is rendered if error is present.</td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to the nested <code>select</code> element.</td>
    </tr>
  </tbody>
</table>

#### `Checkbox`

Wraps `<input type="checkbox" />` HTML tag.

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>label</td>
      <td><code>PropTypes.node</code></td>
      <td>A label to be rendered near the input.</td>
    </tr>
    <tr>
      <td>labelPosition</td>
      <td><code>PropTypes.oneOf(['before', 'after'])</code><br/>Defaults to <code>'after'</code></td>
      <td>Specifies whether label should be rendered before or after input element.</td>
    </tr>
    <tr>
      <td>className</td>
      <td><code>PropTypes.string</code></td>
      <td>className for the root component element (which is a label).</td>
    </tr>
    <tr>
      <td>inputClassName</td>
      <td><code>PropTypes.string</code></td>
      <td>className for internal input element.</td>
    </tr>
    <tr>
      <td>errorClassname</td>
      <td><code>PropTypes.string</code>Defaults to <code>'error'</code></td>
      <td>className for internal error element (div), which is rendered if error is present.</td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to the nested <code>input[type="checkbox"]</code> element.</td>
    </tr>
  </tbody>
</table>

#### `RadioButtonGroup`

Wraper around multiple `RadioButton` components. Has to include `RadioButton`s
as **direct children**, and supplied `name` property to them.

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>labelPosition</td>
      <td><code>PropTypes.oneOf(['before', 'after'])</code><br/>Defaults to <code>'after'</code></td>
      <td>
        Passed to nested <code>RadioButton</code> components.
        Specifies whether label should be rendered before or after input element.
        <strong>Can be overriden</strong> by <code>RadioButton</code>.
      </td>
    </tr>
    <tr>
      <td>className</td>
      <td><code>PropTypes.string</code></td>
      <td>className for the root component element.</td>
    </tr>
    <tr>
      <td>radioClassName</td>
      <td><code>PropTypes.string</code></td>
      <td>
        Passed to nested <code>RadioButton</code> components as <strong>className</strong> property.
        <strong>Can be overriden</strong> by <code>RadioButton</code>.
      </td>
    </tr>
    <tr>
      <td>inputClassName</td>
      <td><code>PropTypes.string</code></td>
      <td>
        Passed to nested <code>RadioButton</code> components property.
        <strong>Can be overriden</strong> by <code>RadioButton</code>.
      </td>
    </tr>
    <tr>
      <td>errorClassname</td>
      <td><code>PropTypes.string</code>Defaults to <code>'error'</code></td>
      <td>className for internal error element (div), which is rendered if error is present.</td>
    </tr>
    <tr>
      <td>children</td>
      <td><code>PropTypes.node</code></td>
      <td>
        Actual radio buttons should be passed in children as <code>RadioButton</code> elements.
        All other (non-radio-button elements) are rendered untouched.
      </td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props is delegated to each of nested <code>RadioButton</code> component (and only to them).</td>
    </tr>
  </tbody>
</table>

#### `RadioButton`

Wraps `<input type="radio" />` HTML tag.

<table>
  <tbody>
    <tr>
      <th>Prop Name</th>
      <th>Spec</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>label</td>
      <td><code>PropTypes.node</code></td>
      <td>A label to be rendered near the input.</td>
    </tr>
    <tr>
      <td>labelPosition</td>
      <td><code>PropTypes.oneOf(['before', 'after'])</code><br/>Defaults to <code>'after'</code></td>
      <td>Specifies whether label should be rendered before or after input element.</td>
    </tr>
    <tr>
      <td>className</td>
      <td><code>PropTypes.string</code></td>
      <td>className for the root component element (which is a label).</td>
    </tr>
    <tr>
      <td>inputClassName</td>
      <td><code>PropTypes.string</code></td>
      <td>className for internal input element.</td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td></td>
      <td>the rest of props are delegated to the nested <code>input[type="radio"]</code> element.</td>
    </tr>
  </tbody>
</table>

## Credits

Hugs and thanks to [ogrechishkina](https://github.com/ogrechishkina) for her
support and building all of the CSS for demo application.

## License

MIT
