import Home from "./Home";
import { shallow } from "enzyme";
import Table from "./Table";

describe("Home Component Test ===>", () => {
  describe("DOM Method --->", () => {
    test("Shallow method - class name exist ", () => {
      let wrapper = shallow(<Home />);
      // console.log(wrapper.debug());
      expect(wrapper.exists(".home-class")).toEqual(true);
    });

    test("HTML Msg check ", () => {
      let wrapper = shallow(<Home />);
      expect(wrapper.contains(<p>Home</p>)).toEqual(true);
    });

    test("find Text check ", () => {
      let wrapper = shallow(<Home />);
      expect(wrapper.find("p").text()).toEqual("Home");
    });

    test("Only Msg check ", () => {
      let wrapper = shallow(<Home />);
      expect(wrapper.containsAllMatchingElements([<p>Home</p>])).toEqual(true);
    });

    test("Any Msg check ", () => {
      let wrapper = shallow(<Home />);
      expect(
        wrapper.containsAnyMatchingElements([
          <p>Home</p>,
          <p>Home component</p>,
        ])
      ).toEqual(true);
    });

    test("find check ", () => {
      let wrapper = shallow(<Home />);
      // expect(wrapper.find(".li-class")).toHaveLength(3);
      expect(wrapper.find(".li-class").length).toBe(3);
    });

    test("at & key check", () => {
      let wrapper = shallow(<Home />);
      expect(wrapper.find(".li-class").at(0).key()).toBe("react");
    });

    test("child check", () => {
      let wrapper = shallow(<Home />);
      expect(wrapper.find(".home-class").childAt(0).type()).toBe("p");
    });

    test("first class exist check - using is ", () => {
      let wrapper = shallow(<Home />);
      expect(wrapper.is(".home-class")).toBe(true);
    });

    test("hasClass check", () => {
      let wrapper = shallow(<Home />);
      expect(wrapper.find(".btn").hasClass("disabled")).toBe(true);
    });

    test("children check ", () => {
      let wrapper = shallow(<Home />);
      expect(wrapper.find("ul").children().length).toBe(3);
    });
  });

  describe("simulate and Dive Method --->", () => {
    test("simulate method check click button ", () => {
      let wrapper = shallow(<Home />);
      expect(wrapper.find(".click").length).toEqual(1);
      wrapper.find(".click-me-btn").simulate("click");
      expect(wrapper.find(".click-1").length).toEqual(1);
    });

    test("Dive method check", () => {
      let wrapper = shallow(<Home />);
      expect(wrapper.find(Table).dive().find(".table-border").length).toBe(1);
    });
  });

  describe.skip("Snapshot Match --->", () => {
    test("Take snapshot match", () => {
      let wrapper = shallow(<Home />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
