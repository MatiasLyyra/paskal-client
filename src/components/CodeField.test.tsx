import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import CodeField from './CodeField';

describe('CodeField text area', () => {
  it('updates code', () => {
    const mockUpdate = jest.fn();
    const wrapper = shallow(
      <CodeField
        onCodeUpdate={mockUpdate}
        code={''}
        indentation={2}></CodeField>,
    );
    const textArea = wrapper.find('#rawCode');
    textArea.simulate('change', {target: {value: 'foobar\n123'}});
    expect(mockUpdate).toHaveBeenLastCalledWith('foobar\n123');
    expect(wrapper).toMatchSnapshot();
  });
  it('indents code', () => {
    const mockUpdate = jest.fn();
    const wrapper = shallow(
      <CodeField
        onCodeUpdate={mockUpdate}
        code={'foobar\n123'}
        indentation={2}></CodeField>,
    );
    const textArea = wrapper.find('#rawCode');
    textArea.simulate('keydown', {
      keyCode: 9,
      target: {selectionStart: 7},
      preventDefault: jest.fn(),
      getModifierState: jest.fn().mockReturnValue(false),
    });
    expect(mockUpdate).toHaveBeenLastCalledWith('foobar\n  123');
  });
  it('deindents code', () => {
    const mockUpdate = jest.fn();
    const wrapper = shallow(
      <CodeField
        onCodeUpdate={mockUpdate}
        code={'foobar\n  123'}
        indentation={2}></CodeField>,
    );
    const textArea = wrapper.find('#rawCode');
    textArea.simulate('keydown', {
      keyCode: 9,
      target: {selectionStart: 9},
      preventDefault: jest.fn(),
      getModifierState: jest.fn().mockReturnValue(true),
    });
    expect(mockUpdate).toHaveBeenLastCalledWith('foobar\n123');
  });
});
