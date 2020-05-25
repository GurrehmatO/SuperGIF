import React from "react";
import { Img } from "react-image";
import { CircularProgress } from "@material-ui/core";

const ListImage = (props) => {
  const { classes, imageData } = props;
  return (
    <Img
      alt={imageData.id}
      className={classes.listImage}
      src={imageData.images.fixed_width_downsampled.url}
      loader={
        <div
          style={{
            height: (imageData.images.fixed_width_downsampled.height * 5) / 4,
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
  );
};

export default ListImage;
