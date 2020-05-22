import React from "react";
import { AppBar, Typography, useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import styles from "../Styles/header.style";
import { SUPER_GIF } from "../Constants/strings";
import { useDebounce } from "../utils";

const useStyles = makeStyles(styles);

const Header = () => {
  const classes = useStyles(styles);
  const scrolled = useScrollTrigger({
    threshold: 0,
  });
  const showShadow = useDebounce(scrolled, 250);
  return (
    <AppBar
      position="sticky"
      className={classes.header}
      elevation={showShadow ? 6 : 0}
    >
      <Typography
        className={clsx(classes.title, showShadow && classes.titleShrunk)}
      >
        {SUPER_GIF}
      </Typography>
    </AppBar>
  );
};

export default Header;
