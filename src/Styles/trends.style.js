export default (theme) => ({
  trendsContainer: {
    transition: "0.2s",
    background: "#fff",
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    [theme.breakpoints.up("sm")]: {
      overflowX: "unset",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  chip: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 8,
    fontWeight: "800",
    marginBottom: 8,
    fontSize: 16,
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);",
  },
  selectedChip: {
    border: "2px solid #1F4788",
    color: "#1F4788",
  },
  searchChip: {
    "& .MuiChip-label": {
      paddingLeft: "unset",
    },
  },
});
