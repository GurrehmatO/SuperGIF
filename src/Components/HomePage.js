import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Img } from "react-image";
import Masonry from "react-masonry-css";
import Header from "./Header";
import { useInfiniteScroll } from "../utils";
import { getGifList } from "../Actions/gifList_actions";
import { LIST_LIMIT } from "../Constants/numeric";
import styles from "../Styles/HomePage.style";
// import GalleryImage from "./GalleryImage";

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
    <>
      <Header />
      <div className={classes.masonryContainer}>
        <Masonry className={classes.masonry} columnClassName={classes.column}>
          {gifList.list.map((imageData) => (
            <Img
              key={imageData.id}
              src={imageData.images.fixed_width.url}
              loader={
                <div
                  style={{
                    width: imageData.images.fixed_width.width,
                    height: imageData.images.fixed_width.height,
                  }}
                >
                  <CircularProgress />
                </div>
              }
            />
          ))}
        </Masonry>
      </div>
      {gifList.loading && <CircularProgress />}
      <div ref={BottomBorderRef} className={classes.border} />
    </>
  );
};

export default HomePage;
