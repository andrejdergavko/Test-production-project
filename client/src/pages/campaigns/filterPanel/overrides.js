export default {
  theme: {
    colors: {
      borderFocus: "#eee",
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
          paddingRight: "25px",
          paddingLeft: "25px",
          backgroundColor: $isSelected ? "#000" : "#eee",
          transition: "background-color 0s",
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
          borderColor: $isEmpty ? "#eee" : "#000",
          backgroundColor: $isEmpty ? "#eee" : "#000",
          transition: "background-color 0s",
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
