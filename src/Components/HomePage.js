import React, { useState, useRef, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Gallery from "react-photo-gallery";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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

  const imageList = useMemo(
    () =>
      gifList.list.map((imageData) => ({
        ...imageData.images.fixed_height,
        src: imageData.images.fixed_height.url,
        width: parseInt(imageData.images.fixed_height.width, 10),
        height: parseInt(imageData.images.fixed_height.height, 10),
      })),
    [gifList.list]
  );
  return (
    <>
      <Header />
      <Gallery
        photos={imageList}
        // renderImage={GalleryImage}
      />
      {gifList.loading && <CircularProgress />}
      <div ref={BottomBorderRef} className={classes.border} />
    </>
  );
};

export default HomePage;
