import React, { PureComponent } from 'react';
import DemoForm from './DemoForm';
import { bindState } from '../../src';

export default class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="mt-20 mb-20">
          <DemoForm {...bindState(this)} />
        </div>
      </div>
    );
  }
};
