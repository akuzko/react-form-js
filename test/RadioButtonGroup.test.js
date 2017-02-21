import React from 'react';
import { shallow, mount } from 'enzyme';
import expect, { createSpy } from 'expect';
import RadioButtonGroup from '../src/RadioButtonGroup';
import RadioButton from '../src/RadioButton';

describe('<RadioButtonGroup />', function() {
  describe('wrapper', function() {
    it('accepts className', function() {
      const wrapper = shallow(<RadioButtonGroup className="foo" name="foo" />);
      expect(wrapper.find('div.foo').length).toBe(1);
    });
  });

  describe('options', function() {
    it('renders non-radio children as passed', function() {
      const wrapper = shallow(
        <RadioButtonGroup name="foo">
          <div className="foo">bar</div>
        </RadioButtonGroup>
      );
      expect(wrapper.contains(<div className="foo">bar</div>)).toBe(true);
    });

    it('passes overridable radioClassName as className to RadioButton', function() {
      const wrapper = shallow(
        <RadioButtonGroup name="foo" radioClassName="bar">
          <RadioButton value="foo" label="foo" />
          <RadioButton value="bar" label="bar" className="baz" />
        </RadioButtonGroup>
      );
      expect(wrapper.containsMatchingElement(<RadioButton value="foo" label="foo" className="bar" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<RadioButton value="bar" label="bar" className="baz" />)).toBe(true);
    });

    it('passes overridable inputClassName to RadioButton', function() {
      const wrapper = shallow(
        <RadioButtonGroup name="foo" inputClassName="bar">
          <RadioButton value="foo" label="foo" />
          <RadioButton value="bar" label="bar" inputClassName="baz" />
        </RadioButtonGroup>
      );
      expect(wrapper.containsMatchingElement(<RadioButton value="foo" label="foo" inputClassName="bar" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<RadioButton value="bar" label="bar" inputClassName="baz" />)).toBe(true);
    });

    it('passes overridable labelPosition prop to RadioButton', function() {
      const wrapper = shallow(
        <RadioButtonGroup name="foo" labelPosition="before">
          <RadioButton value="foo" label="foo" />
          <RadioButton value="bar" label="bar" labelPosition="after" />
        </RadioButtonGroup>
      );
      expect(wrapper.containsMatchingElement(<RadioButton value="foo" label="foo" labelPosition="before" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<RadioButton value="bar" label="bar" labelPosition="after" />)).toBe(true);
    });

    it('passes checked property to the matching RadioButton', function() {
      const wrapper = shallow(
        <RadioButtonGroup name="foo" value="bar">
          <RadioButton value="foo" label="foo" />
          <RadioButton value="bar" label="bar" />
        </RadioButtonGroup>
      );
      expect(wrapper.containsMatchingElement(<RadioButton value="foo" label="foo" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<RadioButton value="bar" label="bar" checked />)).toBe(true);
    });

    it('passes proper onChange function to RadioButton', function() {
      const spy = createSpy();
      const wrapper = mount(
        <RadioButtonGroup name="foo" value="bar" onChange={(value) => spy(value)}>
          <RadioButton value="foo" label="foo" />
          <RadioButton value="bar" label="bar" inputClassName="bar" />
        </RadioButtonGroup>
      );
      wrapper.find('.bar').simulate('change');
      expect(spy).toHaveBeenCalledWith('bar');
    });
  });

  describe('error', function() {
    it('does not render error block when there is no error', function() {
      const wrapper = shallow(<RadioButtonGroup name="foo" errorClassName="my-error" />);
      expect(wrapper.find('.my-error').length).toEqual(0);
    });

    it('renders corresponding error block when error is specified', function() {
      const wrapper = shallow(<RadioButtonGroup name="foo" error="is invalid" errorClassName="my-error" />);
      expect(wrapper.contains(<div className="my-error">is invalid</div>)).toBe(true);
    });

    it('renders error block with default className when error is specified', function() {
      const wrapper = shallow(<RadioButtonGroup name="foo" error="is invalid" />);
      expect(wrapper.contains(<div className="error">is invalid</div>)).toBe(true);
    });
  });
});
