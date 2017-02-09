import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';
import TextField from '../src/TextField';

describe('<TextField />', function() {
  describe('label', function() {
    it('accepts className', function() {
      const wrapper = shallow(<TextField className="foo" />);
      expect(wrapper.find('label').hasClass('foo')).toBe(true);
    });

    it('renders children as label', function() {
      const wrapper = shallow(<TextField><strong>First name:</strong></TextField>);
      expect(wrapper.contains(<strong>First name:</strong>)).toBe(true);
    });
  });

  describe('input', function() {
    it('accepts inputClassName as className', function() {
      const wrapper = shallow(<TextField inputClassName="foo" />);
      expect(wrapper.find('input').hasClass('foo')).toBe(true);
    });

    it('accepts value and rest of the props', function() {
      const wrapper = shallow(<TextField value="bar" placeholder="Foo" />);
      expect(wrapper.containsMatchingElement(<input value="bar" placeholder="Foo" />)).toBe(true);
    });

    it('passes value to onChange callback', function() {
      const event = { target: { value: 'foo' } };
      const spy = createSpy();
      const wrapper = shallow(<TextField onChange={spy} inputClassName="foo" />);
      wrapper.find('.foo').simulate('change', event);
      expect(spy).toHaveBeenCalledWith('foo', event);
    });
  });

  describe('error', function() {
    it('does not render error block when there is no error', function() {
      const wrapper = shallow(<TextField value="foo" errorClassName="my-error" />);
      expect(wrapper.find('.my-error').length).toEqual(0);
    });

    it('renders corresponding error block when error is specified', function() {
      const wrapper = shallow(<TextField error="is invalid" errorClassName="my-error" />);
      expect(wrapper.contains(<div className="my-error">is invalid</div>)).toBe(true);
    });

    it('renders error block with default className when error is specified', function() {
      const wrapper = shallow(<TextField error="is invalid" />);
      expect(wrapper.contains(<div className="error">is invalid</div>)).toBe(true);
    });
  });
});
