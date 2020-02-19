import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import 'jsdom-global/register';

import App from './App.jsx';
import Section1 from './section1/Section1.jsx';
import Section3 from './section3/Section3.jsx';

describe('<App />', () => {

    test('It renders Section1', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.text()).toEqual('<Section1 /><Section2 /><Section3 />');
    });
});

describe('App Unit Tests', () => {
  it('renders to page', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  })

});

describe('<App />', () => {
    it('renders one <Section1 /> components', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Section1)).toHaveLength(1);
    });
})

// it('simulates click events', () => {
//   const onButtonClick = sinon.spy();
//   const wrapper = shallow(<Section3 onButtonClick={onButtonClick} />);
//   wrapper.update()
//   wrapper.find('button').simulate('click');
//   expect(onButtonClick).to.have.property('callCount', 1);
// });

// describe('it exists', () => {
//   test('it exists', async () => {
//     await mount(<App />)
//     const wrapper = shallow(<Section3/>);
//     wrapper.update();
//     expect(wrapper.exists()).toBe(true);
//   });
// });


// const wrapper = mount(<App />);
// wrapper.update();
// expect(wrapper.exists()).toBe(true);