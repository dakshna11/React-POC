import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { screen,render } from "@testing-library/react";
const app = 'Test App'
let wrapped = shallow(<App>{app}</App>)

describe('App', ()=>{
    it('should render the App Component correctly', ()=>{
        expect(wrapped).toMatchSnapshot()
    })
   
    test("renders button", ()=>{
        render(<App/>)
        expect(screen.queryByTestId('btn')).toBeInTheDocument()
    })

    

})
