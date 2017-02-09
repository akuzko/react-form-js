import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';
import TextArea from '../src/TextArea';

describe('<TextArea />', function() {
  describe('label', function() {
    it('accepts className', function() {
      const wrapper = shallow(<TextArea className="foo" />);
      expect(wrapper.find('label').hasClass('foo')).toBe(true);
    });

    it('renders children as label', function() {
      const wrapper = shallow(<TextArea><strong>First name:</strong></TextArea>);
      expect(wrapper.contains(<strong>First name:</strong>)).toBe(true);
    });
  });

  describe('textarea', function() {
    it('accepts inputClassName as className', function() {
      const wrapper = shallow(<TextArea inputClassName="foo" />);
      expect(wrapper.find('textarea').hasClass('foo')).toBe(true);
    });

    it('accepts value and rest of the props', function() {
      const wrapper = shallow(<TextArea value="bar" placeholder="Foo" />);
      expect(wrapper.containsMatchingElement(<textarea value="bar" placeholder="Foo" />)).toBe(true);
    });

    it('passes value to onChange callback', function() {
      const event = { target: { value: 'foo' } };
      const spy = createSpy();
      const wrapper = shallow(<TextArea onChange={spy} inputClassName="foo" />);
      wrapper.find('.foo').simulate('change', event);
      expect(spy).toHaveBeenCalledWith('foo', event);
    });
  });

  describe('error', function() {
    it('does not render error block when there is no error', function() {
      const wrapper = shallow(<TextArea value="foo" errorClassName="my-error" />);
      expect(wrapper.find('.my-error').length).toEqual(0);
    });

    it('renders corresponding error block when error is specified', function() {
      const wrapper = shallow(<TextArea error="is invalid" errorClassName="my-error" />);
      expect(wrapper.contains(<div className="my-error">is invalid</div>)).toBe(true);
    });

    it('renders error block with default className when error is specified', function() {
      const wrapper = shallow(<TextArea error="is invalid" />);
      expect(wrapper.contains(<div className="error">is invalid</div>)).toBe(true);
    });
  });
});
