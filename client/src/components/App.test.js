import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';

import App from './App.jsx';
import Section1 from './section1/Section1.jsx';

// describe('<App />', () => {

//     test('It renders Section1', () => {
//       const wrapper = shallow(<App />);
  
//       expect(wrapper.text()).toEqual('<Section1 />');
//     });
// });

describe('<App />', () => {
    it('renders one <Section1 /> components', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Section1)).to.have.lengthOf(1);
    });
})

// describe('App Unit Tests', () => {
//     it('renders to page', () => {
//       const wrapper = shallow(<App />);
  
//       expect(wrapper.exists()).toBe(true);
//     })

// });