import React from "react";
import renderer from "react-test-renderer";

import Popover from "../popover";

describe("Popover component:", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Popover />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
