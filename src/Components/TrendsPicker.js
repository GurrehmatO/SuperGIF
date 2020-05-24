import React from "react";
import { AppBar, useScrollTrigger, Chip } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import clsx from "clsx";
import { useDebounce } from "../utils";
import styles from "../Styles/trends.style";

const useStyles = makeStyles(styles);
const TrendsPicker = (props) => {
  const classes = useStyles();
  const trends = useSelector((store) => store.trends);
  const { selectedTrend, setTrend } = props;
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const moveUp = useDebounce(scrolled, 125);
  return (
    <AppBar
      className={classes.trendsContainer}
      elevation={0}
      position="sticky"
      style={{ top: moveUp ? 71 : 96 }}
    >
      {["Trending", ...trends.list].map((trend) => (
        <Chip
          label={trend}
          icon={trend === "Trending" ? <TrendingUpIcon /> : undefined}
          key={trend}
          onClick={() => setTrend(trend === "Trending" ? null : trend)}
          clickable
          className={clsx(
            classes.chip,
            (selectedTrend === trend ||
              (selectedTrend === null && trend === "Trending")) &&
              classes.selectedChip
          )}
          color="primary"
        />
      ))}
    </AppBar>
  );
};

export default TrendsPicker;
