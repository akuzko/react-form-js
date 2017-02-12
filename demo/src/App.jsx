import React, { PureComponent } from 'react';
import DemoForm from './DemoForm';

export default class App extends PureComponent {
  state = {
    form: {}
  };

  render() {
    return (
      <div className="container">
        <div className="mt-20 mb-20">
          <DemoForm
            attrs={this.state.form}
            onChange={(form) => this.setState({ form })}
          />
        </div>
      </div>
    );
  }
};
