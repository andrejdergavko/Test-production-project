import React, { useState } from "react";
import { useStyletron } from "styletron-react";
import { Button, SIZE, SHAPE } from "baseui/button";
import { Select } from "baseui/select";
import { ThemeProvider, createTheme, lightThemePrimitives } from "baseui";

import { channels, statuses } from "../../../constants";
import overrides from "./overrides";

function FilterPanel(props) {
  const [channel, setChannel] = useState([]);
  const [status, setStatus] = useState([]);

  const [css] = useStyletron();
  
  const form = css({
    marginBottom: "20px",
  });

  const refetchData = () => {
    console.log('refetch')
    const selectedChannels = channel.map((item) => {
      return item.id;
    });
    const selectedStatus = status.map((item) => {
      return item.id;
    });
    console.log(selectedStatus);

    props.refetch({
      filter: [
        {
          field: "channels",
          values: selectedChannels,
        },
        {
          field: "isActive",
          values: selectedStatus,
        },
      ],
    });
  };

  return (
    <form className={form}>
      <ThemeProvider theme={createTheme(lightThemePrimitives, overrides.theme)}>
        <Button
          onClick={(event) => {
            event.preventDefault();
            refetchData();
          }}
          size={SIZE.compact}
          shape={SHAPE.pill}
          isSelected={channel[0] || status[0] ? false : true}
          overrides={overrides.button}
        >
          All
        </Button>

        <Select
          options={channels}
          value={channel}
          placeholder="Channel"
          onChange={(params) => {
            setChannel(params.value);
            // refetchData();
          }}
          size={SIZE.compact}
          multi={true}
          overrides={overrides.select}
        />

        <Select
          options={statuses}
          value={status}
          placeholder="Status"
          onChange={(params) => setStatus(params.value)}
          size={SIZE.compact}
          overrides={overrides.select}
        />
      </ThemeProvider>
    </form>
  );
}

export default FilterPanel;
