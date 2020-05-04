import React from "react";
import { shallow, mount } from "enzyme";

import { Button } from "baseui/button";
import { Select } from "baseui/select";
import FilterPanel from "../FilterPanel";

describe("FilterPanel component:", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FilterPanel />);
  });

  it("Should to contain children", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Should to contain one button", () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("Button at the beginning should be active", () => {
    expect(wrapper.find(Button).props().isSelected).toBe(true);
  });

  it("Button should not be active after selecting filter", () => {
    wrapper
      .find(Select)
      .at(0)
      .simulate("change", {
        value: [
          {
            iconURL:
              "https://img.icons8.com/material/24/000000/important-mail.png",
            id: "EMAIL",
            label: "Email",
          },
        ],
      });

    expect(wrapper.find(Button).props().isSelected).toBe(false);
  });

  it("Callback function refetch should be called", () => {
    const refetch = jest.fn();
    const props = {
      refetch,
    };

    const input = mount(<FilterPanel {...props} />)
      .find(Select)
      .at(0);

    input.simulate("change", {
      value: [
        {
          iconURL:
            "https://img.icons8.com/material/24/000000/important-mail.png",
          id: "EMAIL",
          label: "Email",
        },
      ],
    });

    expect(refetch).toHaveBeenCalled();
  });
});
