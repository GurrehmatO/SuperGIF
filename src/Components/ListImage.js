import React from "react";
import { Img } from "react-image";
import { CircularProgress, Button } from "@material-ui/core";

const ListImage = (props) => {
  const { classes, imageData, setDialog } = props;
  return (
    <Button
      style={{ padding: 0, width: "100%" }}
      onClick={() => setDialog({ imageData, open: true })}
    >
      <Img
        alt={imageData.id}
        className={classes.listImage}
        src={imageData.images.fixed_width_downsampled.url}
        loader={
          <div
            style={{
              height: (imageData.images.fixed_width_downsampled.height * 7) / 8,
              width: "100%",
            }}
            className={classes.listImage}
          >
            <CircularProgress style={{ margin: "auto" }} />
          </div>
        }
      />
    </Button>
  );
};

export default ListImage;
