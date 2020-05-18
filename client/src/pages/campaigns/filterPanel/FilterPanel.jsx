// @flow
import React, { useState, useEffect } from "react";
import { useStyletron } from "styletron-react";
import { Button, SIZE, SHAPE } from "baseui/button";
import { Select } from "baseui/select";
import { ThemeProvider, createTheme, lightThemePrimitives } from "baseui";

import { CHANNELS, STATUSES } from "../../../constants";
import overrides from "./overrides";

type FilterPanelT = {
  setChannelFilter: (a: string[]) => void,
  setStatusFilter: (a: string[]) => void,
  clearFilter: () => void,
};

function FilterPanel({
  setChannelFilter,
  setStatusFilter,
  nameFilter,
  clearFilter,
}: FilterPanelT) {
  const [channel, setChannel] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const selectedChannels = channel.map((item) => {
      return String(item.id);
    });
    const selectedStatus = status.map((item) => {
      return String(item.id);
    });

    setChannelFilter(selectedChannels);
    setStatusFilter(selectedStatus);
  }, [channel, status]);

  const [css] = useStyletron();

  const form = css({
    marginBottom: "20px",
    display: "flex",
  });

  return (
    <div className={form}>
      <ThemeProvider theme={createTheme(lightThemePrimitives, overrides.theme)}>
        <Button
          onClick={() => {
            setChannel([]);
            setStatus([]);
            clearFilter();
          }}
          size={SIZE.compact}
          shape={SHAPE.pill}
          isSelected={!(channel[0] || status[0] || nameFilter[0])}
          overrides={overrides.button}
        >
          All
        </Button>

        <Select
          options={CHANNELS}
          value={channel}
          placeholder="Channel"
          onChange={(params) => {
            setChannel(params.value);
          }}
          size={SIZE.compact}
          multi={true}
          searchable={false}
          clearable={false}
          overrides={overrides.select}
        />

        <Select
          options={STATUSES}
          value={status}
          placeholder="Status"
          onChange={(params) => setStatus(params.value)}
          size={SIZE.compact}
          searchable={false}
          overrides={overrides.select}
        />
      </ThemeProvider>
    </div>
  );
}

export default FilterPanel;
