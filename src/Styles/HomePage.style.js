export default {
  masonryContainer: {
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  masonry: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    margin: "0 auto",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    "& > *": {
      width: "95%",
      margin: 5,
    },
  },
  border: {
    height: 2,
    width: 1,
  },
};
