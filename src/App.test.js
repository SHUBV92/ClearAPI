import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

describe("APP", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
  });

  it("display 'Loading...' when there is no data", () => {
    expect(wrapper.find("p").text()).toEqual(`Loading...`);
  });

  it("Component Did Mount", () => {
    const methodNameFake = jest.spyOn(App.prototype, "componentDidMount");
    mount(<App />);
    expect(methodNameFake).toHaveBeenCalledTimes(1);
  });
});
