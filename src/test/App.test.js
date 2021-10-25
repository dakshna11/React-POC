import React from 'react';
import { shallow } from 'enzyme';
import App from "../Components/App";


let wrapped = shallow(<App></App>);
describe('App', () => {
  it('should render the App Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  // it('test the function' , () => {
  //   expect(wrapped.document.body.scrollTop).toBe('0')

  // })
})