import React from 'react';
import { shallow } from 'enzyme';
import WashingPoints from "../Components/Header-comp/WashingPoints";
import { Thumbs } from 'react-responsive-carousel';


const title = 'Washing Points';
//const onSubmitFn = jest.fn();
let wrapped = shallow(<WashingPoints //onClick={onSubmitFn}
  ></WashingPoints>);
describe('WashingPoints', () => {
  it('should render the WashingPoints Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the Titles children', () => { 
    expect(wrapped.find('h1').text()).toEqual(title);
  });
    test("renders button", ()=>{
      render(<WashingPoints/>)
      expect(screen.queryByTestId('btn-WP')).toBeInTheDocument()
  })
})

