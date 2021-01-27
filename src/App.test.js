import React from "react";
import { mount } from "enzyme";
import App from "./App";
import LaunchProfile from "./components/LaunchProfile/LaunchProfile";

import { createMount } from '@material-ui/core/test-utils';
import LaunchList from "./components/LaunchList/LaunchList";
//import { ThemeProvider } from '@material-ui/core/styles';

describe('<App />', () => {
  let mount;

  
  before(() => {
    mount = createMount();
  });

  after(() => {
    mount.cleanUp();
  });

  it('should work', () => {
    const wrapper = mount(<LaunchProfile/>, <LaunchList/>);
  });
});




/* describe("Launch", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
    
  });

  test("render the launchlist", () => {
    expect(wrapper.find("root").children()).toContain(<LaunchList/>);
    
  });
  test("render the launchlist", () => {
    expect(wrapper.find("Grid").children()).toContain(<LaunchProfile/>);
  });
  
/* 
  test("render a button with text of `increment`", () => {
    expect(wrapper.state().id).to.equal(42);
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrrment button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  }); 
});
 */