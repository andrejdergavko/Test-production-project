import React from "react";
import renderer from "react-test-renderer";

import CompleteTag from "../completeTag";

describe("CompleteTag component:", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CompleteTag />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
