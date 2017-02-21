import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import RadioButton from '../src/RadioButton';

describe('<RadioButton />', function() {
  describe('label', function() {
    it('accepts className', function() {
      const wrapper = shallow(<RadioButton className="foo" />);
      expect(wrapper.find('label').hasClass('foo')).toBe(true);
    });

    it('renders label in props', function() {
      const wrapper = shallow(<RadioButton label="Radio" />);
      expect(wrapper.contains('Radio')).toBe(true);
    });

    it('renders children as label', function() {
      const wrapper = shallow(<RadioButton><strong>Radio</strong></RadioButton>);
      expect(wrapper.contains(<strong>Radio</strong>)).toBe(true);
    });

    it('renders label after input by default', function() {
      const wrapper = shallow(<RadioButton label="Radio" />);
      expect(wrapper.equals(
        <label className={undefined}>
          <input type="radio" className={undefined} />
          Radio
        </label>
      )).toBe(true);
    });

    it('renders label before input if corresponding labelPosition prop is specified', function() {
      const wrapper = shallow(<RadioButton label="Radio" labelPosition="before" />);
      expect(wrapper.equals(
        <label className={undefined}>
          Radio
          <input type="radio" className={undefined} />
        </label>
      )).toBe(true);
    });
  });

  describe('input', function() {
    it('accepts inputClassName as className', function() {
      const wrapper = shallow(<RadioButton inputClassName="foo" />);
      expect(wrapper.find('input[type="radio"]').hasClass('foo')).toBe(true);
    });

    it('accepts value and rest of the props', function() {
      const wrapper = shallow(<RadioButton value="bar" id="radio" />);
      expect(wrapper.containsMatchingElement(<input value="bar" id="radio" />)).toBe(true);
    });
  });
});
