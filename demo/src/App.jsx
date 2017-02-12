import React, { PureComponent } from 'react';
import DemoForm from './DemoForm';

export default class App extends PureComponent {
  state = {
    form: {}
  };

  render() {
    return (
      <DemoForm
        attrs={this.state.form}
        onChange={(form) => this.setState({ form })}
      />
    );
  }
};
