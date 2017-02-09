import React from 'react';
import { shallow } from 'enzyme';
import expect, { createSpy } from 'expect';
import Select from '../src/Select';

describe('<Select />', function() {
  describe('label', function() {
    it('accepts className', function() {
      const wrapper = shallow(<Select className="foo" label="Item:" />);
      expect(wrapper.find('label').hasClass('foo')).toBe(true);
    });

    it('renders label property', function() {
      const wrapper = shallow(<Select label={<div>Item:</div>} />);
      expect(wrapper.contains(<div>Item:</div>)).toBe(true);
    });
  });

  describe('select', function() {
    it('accepts inputClassName as className', function() {
      const wrapper = shallow(<Select inputClassName="foo" />);
      expect(wrapper.find('select').hasClass('foo')).toBe(true);
    });

    it('accepts value and rest of the props', function() {
      const wrapper = shallow(<Select value="foo" name="foo" />);
      expect(wrapper.containsMatchingElement(<select value="foo" name="foo" />)).toBe(true);
    });

    it('passes value to onChange callback', function() {
      const event = { target: { value: 'foo' } };
      const spy = createSpy();
      const wrapper = shallow(<Select onChange={spy} inputClassName="foo" />);
      wrapper.find('.foo').simulate('change', event);
      expect(spy).toHaveBeenCalledWith('foo', event);
    });
  });

  describe('options', function() {
    it('accepts array of numbers', function() {
      const options = [1, 2, 3];
      const wrapper = shallow(<Select options={options} />);

      expect(wrapper.contains(<option value={1}>{1}</option>)).toBe(true);
      expect(wrapper.contains(<option value={2}>{2}</option>)).toBe(true);
      expect(wrapper.contains(<option value={3}>{3}</option>)).toBe(true);
    });

    it('accepts array of strings', function() {
      const options = ['1', '2', '3'];
      const wrapper = shallow(<Select options={options} />);

      expect(wrapper.contains(<option value="1">1</option>)).toBe(true);
      expect(wrapper.contains(<option value="2">2</option>)).toBe(true);
      expect(wrapper.contains(<option value="3">3</option>)).toBe(true);
    });

    it('accepts array of objects', function() {
      const options = [{ value: 1, label: 'one' }, { value: 2, label: 'two' }];
      const wrapper = shallow(<Select options={options} />);

      expect(wrapper.contains(<option value={1}>one</option>)).toBe(true);
      expect(wrapper.contains(<option value={2}>two</option>)).toBe(true);
    });

    it('uses children as options if passed', function() {
      const wrapper = shallow(
        <Select>
          <option value={1}>one</option>
          <option value={2}>two</option>
        </Select>
      );

      expect(wrapper.contains(<option value={1}>one</option>)).toBe(true);
      expect(wrapper.contains(<option value={2}>two</option>)).toBe(true);
    });
  });

  describe('includeBlank property', function() {
    it('renders empty option with None label by default', function() {
      const wrapper = shallow(<Select includeBlank />);
      expect(wrapper.contains(<option value="">None</option>)).toBe(true);
    });

    it('renders empty option with specified label if string is passed', function() {
      const wrapper = shallow(<Select includeBlank="Select Item..." />);
      expect(wrapper.contains(<option value="">Select Item...</option>)).toBe(true);
    });
  });

  describe('error', function() {
    it('does not render error block when there is no error', function() {
      const wrapper = shallow(<Select value="foo" errorClassName="my-error" />);
      expect(wrapper.find('.my-error').length).toEqual(0);
    });

    it('renders corresponding error block when error is specified', function() {
      const wrapper = shallow(<Select error="is invalid" errorClassName="my-error" />);
      expect(wrapper.contains(<div className="my-error">is invalid</div>)).toBe(true);
    });

    it('renders error block with default className when error is specified', function() {
      const wrapper = shallow(<Select error="is invalid" />);
      expect(wrapper.contains(<div className="error">is invalid</div>)).toBe(true);
    });
  });
});
