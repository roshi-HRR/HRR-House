// describe('Testing functionality of Jest', () => {
//     it('sums numbers', () => {
//         expect(1+2).toEqual(3)
//         expect(2+2).toEqual(4)
//     });
// });

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';



describe('renders without crasing', () => {
   const div = document.createElement("div");
   ReactDOM.render(<App />, div);
   console.log('true')
   ReactDOM.unmountComponentAtNode(div);
});