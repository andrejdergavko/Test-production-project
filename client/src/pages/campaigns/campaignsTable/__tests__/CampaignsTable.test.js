import React from "react";
import renderer from "react-test-renderer";

import CampaignsTable from "../CampaignsTable";

describe("CampaignsTable component:", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CampaignsTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
