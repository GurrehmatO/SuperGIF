import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Img } from "react-image";
import clsx from "clsx";
import Header from "./Header";
import { useInfiniteScroll } from "../utils";
import { getGifList } from "../Actions/gifList_actions";
import { LIST_LIMIT } from "../Constants/numeric";
import styles from "../Styles/HomePage.style";

const useStyles = makeStyles(styles);

const HomePage = () => {
  const classes = useStyles();
  const gifList = useSelector((store) => store.gifList);
  const dispatch = useDispatch();
  const [pageNum, setPage] = useState(0);
  const BottomBorderRef = useRef(null);
  useInfiniteScroll(BottomBorderRef, 0, setPage);

  useEffect(() => {
    dispatch(
      getGifList("trending", {
        limit: LIST_LIMIT,
        offset: pageNum * LIST_LIMIT,
      })
    );
  }, [dispatch, pageNum]);

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.masonryContainer}>
        <div className={classes.masonry}>
          {gifList.list.map((imageData) => (
            <div className={classes.brick} key={imageData.id}>
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
