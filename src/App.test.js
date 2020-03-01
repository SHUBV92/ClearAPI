import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import data from "../data.json";
describe("APP", () => {
  let wrapper;

  fetch = jest.fn();
  beforeEach(() => {

    wrapper = shallow(<App />);
  });
  // fetch.mockImplementation(() => {
  //   return Promise.resolve({
  //     status: 200,
  //     ok: true,
  //     json: () => {
  //       return Promise.resolve(data);
  //     }
  //   });
  // });

fetch.mockImplementation(() => {
    return new Promise(reject => {
      reject({
        status: 200,
        ok: true,
        json: () => {
          return Promise.reject(data);
        }
      });
    });
  });

  it("display 'Loading...' when there is no data", () => {
    expect(wrapper.find("p").text()).toEqual(`Loading...`);
  });

  it("Component Did Mount", () => {
    const methodNameFake = jest.spyOn(App.prototype, "componentDidMount");
    mount(<App />);
    expect(methodNameFake).toHaveBeenCalledTimes(1);
  });

  xit("Fetch returned res.ok equals to false", () => {
    fetch = jest.fn();

    fetch.mockImplementation(() => {
      return new Promise(resolve => {
        resolve({
          status: 401,
          ok: false,
          json: () => {
            return Promise.resolve([]);
          }
        });
      });
    });

    expect(wrapper.find("p").text()).toEqual("Something went wrong");
  });
});





