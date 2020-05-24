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
  },
  selectedChip: {
    border: "2px solid #1F4788",
    color: "#1F4788",
  },
});
