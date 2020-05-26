import React, { useState } from "react";
import {
  Dialog,
  CircularProgress,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { Img } from "react-image";
import GetAppIcon from "@material-ui/icons/GetApp";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FileDownload from "js-file-download";
import Axios from "axios";
import { SOURCE, DOWNLOAD } from "../Constants/strings";

// eslint-disable-next-line
const mediaRegex = "/media/\d.giphy.com/g";

const ImageDialog = (props) => {
  const [downloadDisabled, setDownloadDisable] = useState(false);
  const { classes, imageData, open, setDialog } = props;

  return (
    <Dialog
      open={open}
      onClose={() => setDialog((s) => ({ ...s, open: false }))}
    >
      {imageData && (
        <>
          <Img
            src={imageData.images.original.url}
            loader={<CircularProgress style={{ margin: "12px auto" }} />}
            className={classes.dialogImage}
          />
          <DialogTitle>{imageData.title}</DialogTitle>
          <DialogContent>
            {imageData.source_tld && (
              <DialogContentText>{`${SOURCE}: ${imageData.source_tld}`}</DialogContentText>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              startIcon={<GetAppIcon />}
              disabled={downloadDisabled}
              onClick={() => {
                setDownloadDisable(true);
                const request = Axios({
                  url: `https://i.giphy.com/media${
                    imageData.images.original.url.split(".giphy.com/media")[1]
                  }`,
                  method: "GET",
                  responseType: "blob",
                });
                request.then((response) => {
                  FileDownload(response.data, `${imageData.id}.gif`);
                  setDownloadDisable(false);
                });
              }}
            >
              {`${DOWNLOAD}${downloadDisabled ? "ing" : ""}`}
            </Button>
            {/* <Button startIcon={<WhatsAppIcon />}>{WHATSAPP}</Button> */}
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default ImageDialog;
