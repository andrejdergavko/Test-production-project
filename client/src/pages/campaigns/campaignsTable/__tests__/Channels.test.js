import React from "react";
import { shallow } from "enzyme";

import Channels from "../channels";

describe("Channels component:", () => {
  it("Should render two icons", () => {
    const props = {
      channels: [
        {
          name: "EMAIL",
        },
        {
          name: "SMS",
        },
      ],
    };

    const wrapper = shallow(<Channels {...props} />);
    expect(wrapper.find('img')).toHaveLength(2);
  });
});
