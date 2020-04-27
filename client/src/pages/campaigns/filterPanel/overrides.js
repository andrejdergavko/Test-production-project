export default {
  theme: {
    colors: {
      inputBorder: "#eee",
      inputFill: "#eee",
      inputPlaceholder: "#000",
      contentPrimary: "#000",
    },
  },
  button: {
    BaseButton: {
      style: ({ $theme }) => {
        return {
          padding: "10px 25px",
        };
      },
    },
  },
  select: {
    Root: {
      style: ({ $theme }) => {
        return {
          display: "inline-block",
          width: "auto",
          marginLeft: "15px",
        };
      },
    },
    ControlContainer: {
      style: ({ $theme }) => {
        return { borderRadius: "50px" };
      },
    },
    Placeholder: {
      style: ({ $theme }) => {
        return {
          fontWeight: "500",
        };
      },
    },
    IconsContainer: {
      style: ({ $theme }) => {
        return {
          marginLeft: "10px",
        };
      },
    },
  },
};
