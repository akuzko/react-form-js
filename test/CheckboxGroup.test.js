import React from 'react';
import { shallow, mount } from 'enzyme';
import expect, { createSpy } from 'expect';
import CheckboxGroup from '../src/CheckboxGroup';
import Checkbox from '../src/Checkbox';

describe('<CheckboxGroup />', function() {
  describe('wrapper', function() {
    it('accepts className', function() {
      const wrapper = shallow(<CheckboxGroup className="foo" />);
      expect(wrapper.find('div.foo').length).toBe(1);
    });
  });

  describe('options', function() {
    it('renders non-checkbox children as passed', function() {
      const wrapper = shallow(
        <CheckboxGroup>
          <div className="foo">bar</div>
        </CheckboxGroup>
      );
      expect(wrapper.contains(<div className="foo">bar</div>)).toBe(true);
    });

    it('passes overridable checkboxClassName as className to Checkbox', function() {
      const wrapper = shallow(
        <CheckboxGroup checkboxClassName="bar">
          <Checkbox value="foo" label="foo" />
          <Checkbox value="bar" label="bar" className="baz" />
        </CheckboxGroup>
      );
      expect(wrapper.containsMatchingElement(<Checkbox label="foo" className="bar" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<Checkbox label="bar" className="baz" />)).toBe(true);
    });

    it('passes overridable inputClassName to Checkbox', function() {
      const wrapper = shallow(
        <CheckboxGroup inputClassName="bar">
          <Checkbox value="foo" label="foo" />
          <Checkbox value="bar" label="bar" inputClassName="baz" />
        </CheckboxGroup>
      );
      expect(wrapper.containsMatchingElement(<Checkbox label="foo" inputClassName="bar" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<Checkbox label="bar" inputClassName="baz" />)).toBe(true);
    });

    it('passes overridable labelPosition prop to Checkbox', function() {
      const wrapper = shallow(
        <CheckboxGroup labelPosition="before">
          <Checkbox value="foo" label="foo" />
          <Checkbox value="bar" label="bar" labelPosition="after" />
        </CheckboxGroup>
      );
      expect(wrapper.containsMatchingElement(<Checkbox label="foo" labelPosition="before" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<Checkbox label="bar" labelPosition="after" />)).toBe(true);
    });

    it('passes appropriate `value` property to matching Checkbox components', function() {
      const wrapper = shallow(
        <CheckboxGroup value={['foo', 'baz']}>
          <Checkbox value="foo" label="foo" />
          <Checkbox value="bar" label="bar" />
          <Checkbox value="baz" label="baz" />
        </CheckboxGroup>
      );
      expect(wrapper.containsMatchingElement(<Checkbox value={true} label="foo" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<Checkbox value={false} label="bar" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<Checkbox value={true} label="baz" />)).toBe(true);
    });

    it('properly handles checking of nested Checkbox', function() {
      const spy = createSpy();
      const e = { target: { checked: true } };
      const wrapper = mount(
        <CheckboxGroup onChange={(value) => spy(value)}>
          <Checkbox value="foo" label="foo" />
          <Checkbox value="bar" label="bar" inputClassName="bar" />
        </CheckboxGroup>
      );
      wrapper.find('.bar').simulate('change', e);
      expect(spy).toHaveBeenCalledWith(['bar']);
    });

    it('properly handles unchecking of nested Checkbox', function() {
      const spy = createSpy();
      const e = { target: { checked: false } };
      const wrapper = mount(
        <CheckboxGroup value={['foo', 'bar']} onChange={(value) => spy(value)}>
          <Checkbox value="foo" label="foo" />
          <Checkbox value="bar" label="bar" inputClassName="bar" />
        </CheckboxGroup>
      );
      wrapper.find('.bar').simulate('change', e);
      expect(spy).toHaveBeenCalledWith(['foo']);
    });
  });

  describe('error', function() {
    it('does not render error block when there is no error', function() {
      const wrapper = shallow(<CheckboxGroup errorClassName="my-error" />);
      expect(wrapper.find('.my-error').length).toEqual(0);
    });

    it('renders corresponding error block when error is specified', function() {
      const wrapper = shallow(<CheckboxGroup error="is invalid" errorClassName="my-error" />);
      expect(wrapper.contains(<div className="my-error">is invalid</div>)).toBe(true);
    });

    it('renders error block with default className when error is specified', function() {
      const wrapper = shallow(<CheckboxGroup error="is invalid" />);
      expect(wrapper.contains(<div className="error">is invalid</div>)).toBe(true);
    });
  });
});
