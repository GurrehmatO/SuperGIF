import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Img } from "react-image";
import clsx from "clsx";
import Header from "./Header";
import { useInfiniteScroll } from "../utils";
import { getGifList, clearGifList } from "../Actions/gifList_actions";
import { getTrendsList } from "../Actions/trends_actions";
import { LIST_LIMIT } from "../Constants/numeric";
import styles from "../Styles/HomePage.style";
import TrendsPicker from "./TrendsPicker";

const useStyles = makeStyles(styles);

const HomePage = () => {
  const classes = useStyles();
  const gifList = useSelector((store) => store.gifList);
  const dispatch = useDispatch();
  const [selectedTrend, setTrend] = useState(null);
  const [pageNum, setPage] = useState();
  const BottomBorderRef = useRef(null);
  useInfiniteScroll(BottomBorderRef, 0, setPage);

  useEffect(() => {
    dispatch(getTrendsList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearGifList());
    setPage(0);
  }, [dispatch, selectedTrend]);

  useEffect(() => {
    dispatch(
      getGifList(selectedTrend ? "search" : "trending", {
        limit: LIST_LIMIT,
        offset: pageNum * LIST_LIMIT,
        ...(selectedTrend && { q: selectedTrend }),
      })
    );
  }, [dispatch, selectedTrend, pageNum]);

  return (
    <div className={classes.root}>
      <Header />
      <TrendsPicker selectedTrend={selectedTrend} setTrend={setTrend} />
      <div className={classes.masonryContainer}>
        <div className={classes.masonry}>
          {gifList.list.map((imageData) => (
            <Box className={classes.brick} key={imageData.id}>
              <Img
                alt={imageData.id}
                className={classes.listImage}
                src={imageData.images.fixed_width.url}
                loader={
                  <div
                    style={{
                      height: `${imageData.images.fixed_width.height}px`,
                      width: `${imageData.images.fixed_width.width}px`,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className={classes.listImage}
                  >
                    <CircularProgress />
                  </div>
                }
              />
            </Box>
          ))}
        </div>
      </div>
      <CircularProgress
        ref={BottomBorderRef}
        className={clsx(classes.loader, !gifList.loading && classes.invisible)}
      />
    </div>
  );
};

export default HomePage;
