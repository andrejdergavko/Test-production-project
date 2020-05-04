import React from "react";
import renderer from "react-test-renderer";

import NavItem from "../navItem";

describe("NavItem component:", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NavItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
