export default {
  theme: {
    colors: {
      inputBorder: "#eee",
      inputFill: "#eee",
      inputPlaceholder: "#000",
      contentPrimary: "#000",
      buttonPrimaryFill: "#eee",
      buttonPrimaryText: "#000",
      buttonPrimaryHover: "#ddd",
    },
  },
  button: {
    BaseButton: {
      style: ({ $isSelected }) => {
        return {
          padding: "10px 25px",
          backgroundColor: $isSelected ? "#000" : "#eee",
        };
      },
    },
  },
  select: {
    Root: {
      style: () => {
        return {
          display: "inline-block",
          width: "auto",
          marginLeft: "15px",
        };
      },
    },
    ControlContainer: {
      style: ({ $isEmpty }) => {
        return {
          borderRadius: "50px",
          backgroundColor: $isEmpty ? "#eee" : "#000",
        };
      },
    },
    Placeholder: {
      style: () => {
        return {
          fontWeight: "500",
        };
      },
    },
    ValueContainer: {
      style: ({ $isEmpty }) => {
        return { color: $isEmpty ? "#000" : "#fff" };
      },
    },
    IconsContainer: {
      style: () => {
        return {
          marginLeft: "10px",
        };
      },
    },
    ClearIcon: {
      style: ({ $isEmpty }) => {
        return {
          color: $isEmpty ? "#000" : "#fff",
        };
      },
    },
    SelectArrow: {
      style: ({ $isEmpty }) => {
        return {
          color: $isEmpty ? "#000" : "#fff",
        };
      },
    },
  },
};
