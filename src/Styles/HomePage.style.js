export default () => ({
  root: {
    width: "100vw",
    minHeight: "calc(100vh - 96px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  masonryContainer: {
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  masonry: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "stretch",
  },
  column: {
    minWidth: 150,
    marginRight: 12,
    flexGrow: 1,
    "&:last-child": {
      marginRight: "unset",
    },
  },
  brick: {
    margin: "6px 0",
    width: "100%",
  },
  listImage: {
    width: "100%",
    borderRadius: 3,
  },
  loader: {
    margin: "0 auto",
  },
  invisible: {
    opacity: 1,
  },
});
