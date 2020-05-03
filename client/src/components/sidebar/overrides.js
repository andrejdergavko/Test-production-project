export default {
  navigation: {
    Root: {
      style: () => {
        return {
          maxWidth: "37px",
          padding: "20px 15px",
          backgroundColor: "#f6f6f6",
          transition: "max-width 0.2s",
          ":hover": {
            maxWidth: "500px",
          },
        };
      },
    },
    NavItemContainer: {
      style: () => {
        return {
          margin: "15px 0",
        };
      },
    },
    NavItem: {
      style: ({ $active }) => {
        const common = {
          padding: "6px 6px",
          borderRadius: "50px",
          borderLeft: "none",
          fontWeight: "500",
          overflow: "hidden",
          transition: "0.1s",
          backgroundImage: "none",
        };
        if ($active) {
          return {
            ...common,
            color: "#fff",
            backgroundColor: "#000",
            ":hover": {
              color: "#fff",
            },
          };
        }
        return {
          ...common,
          ":hover": {
            backgroundColor: "#dfdfdf",
          },
        };
      },
    },
  },
};
