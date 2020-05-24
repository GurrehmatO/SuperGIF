import React, { useState, useRef, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Img } from "react-image";
import clsx from "clsx";
import Header from "./Header";
import { useInfiniteScroll, makeImageColumns, useWindowSize } from "../utils";
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
  const [pageNum, setPage] = useState(0);
  const BottomBorderRef = useRef(null);
  useInfiniteScroll(BottomBorderRef, 0, setPage);
  const { width } = useWindowSize();
  const columnCount = Math.floor((width * 0.9) / 162);
  const columns = useMemo(
    () =>
      makeImageColumns(
        gifList.list,
        "images.fixed_width_small.height",
        columnCount
      ),
    [gifList.list, columnCount]
  );
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
          {columns.map((column) => (
            <div className={classes.column}>
              {column.list.map((imageData) => (
                <div className={classes.brick} key={imageData.id}>
                  <Img
                    alt={imageData.id}
                    className={classes.listImage}
                    src={imageData.images.fixed_width_small.url}
                    loader={
                      <div
                        style={{
                          height:
                            (imageData.images.fixed_width_small.height * 7) / 8,
                          width: "100%",
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
                </div>
              ))}
            </div>
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
