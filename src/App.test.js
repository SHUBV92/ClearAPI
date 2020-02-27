import React from 'react';
import { shallow } from "enzyme";
import App from './App';

describe("APP", () => {
  let wrapper;
  it("display 'Loading...' when there is no data", ()=> {
    wrapper = shallow(<App />);
    console.log('wrapper', wrapper);

    expect(wrapper.find('p').text).toEqual('Loading...')
  })


});
