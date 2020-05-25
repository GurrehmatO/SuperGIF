import React, { useState, useRef, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ListImage from "./ListImage";
import Header from "./Header";
import { useInfiniteScroll, makeImageColumns, useWindowSize } from "../utils";
import { getGifList, clearGifList } from "../Actions/gifList_actions";
import { getTrendsList } from "../Actions/trends_actions";
import { LIST_LIMIT } from "../Constants/numeric";
import styles from "../Styles/HomePage.style";
import TrendsPicker from "./TrendsPicker";
import SearchDialog from "./SearchDialog";

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
  // number of columns is floor value 90% of width divided by min column width, max value 6
  const columnCount = Math.min(Math.floor((width * 0.9) / 162), 6);
  const columns = useMemo(
    () =>
      makeImageColumns(
        gifList.list,
        "images.fixed_width_downsampled.height",
        columnCount
      ),
    [gifList.list, columnCount]
  );

  const [search, setSearch] = useState({
    key: "",
    dialogOpen: false,
    searchMode: false,
  });

  useEffect(() => {
    dispatch(getTrendsList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearGifList());
    setPage(0);
  }, [dispatch, selectedTrend, search.searchMode]);

  useEffect(() => {
    dispatch(
      getGifList(selectedTrend || search.searchMode ? "search" : "trending", {
        limit: LIST_LIMIT,
        offset: pageNum * LIST_LIMIT,
        ...(selectedTrend && { q: selectedTrend }),
        ...(search.searchMode && { q: search.key }),
      })
    );
    // eslint-disable-next-line
  }, [dispatch, selectedTrend, pageNum, search.searchMode]);

  return (
    <div className={classes.root}>
      <Header />
      <TrendsPicker
        selectedTrend={selectedTrend}
        setTrend={setTrend}
        setSearch={setSearch}
        searchLabel={search.searchMode ? search.key : ""}
      />
      <div className={classes.masonryContainer}>
        <div className={classes.masonry}>
          {columns.map((column) => (
            <div className={classes.column}>
              {column.list.map((imageData) => (
                <div className={classes.brick} key={imageData.id}>
                  <ListImage classes={classes} imageData={imageData} />
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
      <SearchDialog config={search} setSearch={setSearch} />
    </div>
  );
};

export default HomePage;
