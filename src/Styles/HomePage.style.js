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
    columns: "5 150px",
    columnGap: 12,
    width: "90%",
    margin: "0 auto",
  },
  brick: {
    margin: "6px 0",
    display: "inline-block",
    width: "100%",
    transition: "all .25s ease-in-out",
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
