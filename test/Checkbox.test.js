import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';
import Checkbox from '../src/Checkbox';

describe('<Checkbox />', function() {
  describe('label', function() {
    it('accepts className', function() {
      const wrapper = shallow(<Checkbox className="foo" />);
      expect(wrapper.find('label').hasClass('foo')).toBe(true);
    });

    it('renders label in props', function() {
      const wrapper = shallow(<Checkbox label="Approve" />);
      expect(wrapper.contains('Approve')).toBe(true);
    });
  });

  describe('Checkbox', function() {
    it('accepts inputClassName as className', function() {
      const wrapper = shallow(<Checkbox inputClassName="foo" />);
      expect(wrapper.find('input[type="checkbox"]').hasClass('foo')).toBe(true);
    });

    it('accepts value and rest of the props', function() {
      const wrapper = shallow(<Checkbox value={true} name="foo" />);
      expect(wrapper.containsMatchingElement(<input type="checkbox" checked name="foo" />)).toBe(true);
    });

    it('passes value to onChange callback', function() {
      const event = { target: { checked: false } };
      const spy = createSpy();
      const wrapper = shallow(<Checkbox onChange={spy} value={true} inputClassName="foo" />);
      wrapper.find('.foo').simulate('change', event);
      expect(spy).toHaveBeenCalledWith(false, event);
    });
  });

  describe('error', function() {
    it('does not render error block when there is no error', function() {
      const wrapper = shallow(<Checkbox value={false} errorClassName="my-error" />);
      expect(wrapper.find('.my-error').length).toEqual(0);
    });

    it('renders corresponding error block when error is specified', function() {
      const wrapper = shallow(<Checkbox error="is invalid" errorClassName="my-error" />);
      expect(wrapper.contains(<div className="my-error">is invalid</div>)).toBe(true);
    });

    it('renders error block with default className when error is specified', function() {
      const wrapper = shallow(<Checkbox error="is invalid" />);
      expect(wrapper.contains(<div className="error">is invalid</div>)).toBe(true);
    });
  });
});
