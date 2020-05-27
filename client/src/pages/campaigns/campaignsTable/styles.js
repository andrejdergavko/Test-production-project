export default {
    table : {
        Root: {
          style: () => {
            return { border: "#f6f6f6 solid 2px" };
          },
        },
        TableHeadCell: {
          style: () => {
            return {
              backgroundColor: "#f6f6f6",
              "::before": { borderLeftStyle: "none" },
              "::after": { backgroundImage: "none" },
            };
          },
        },
        TableBodyRow: {
          style: () => {
            return {
              outline: "#f6f6f6 solid 1px",
              backgroundColor: "#fff",
            };
          },
        },
        TableBodyCell: {
          style: () => {
            return {
              verticalAlign: "middle",
            };
          },
        },
      }
}