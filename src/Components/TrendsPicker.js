import React from "react";
import { AppBar, useScrollTrigger, Chip } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import { useDebounce } from "../utils";
import styles from "../Styles/trends.style";
import { SEARCH, TRENDING } from "../Constants/strings";

const useStyles = makeStyles(styles);

const TrendsPicker = (props) => {
  const classes = useStyles();
  const trends = useSelector((store) => store.trends);
  const { selectedTrend, setTrend, setSearch, searchLabel } = props;
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
      {[SEARCH, TRENDING, ...trends.list].map((trend) => (
        <Chip
          label={trend === SEARCH ? searchLabel : trend}
          icon={(() => {
            switch (trend) {
              case SEARCH:
                return <SearchIcon />;
              case TRENDING:
                return <TrendingUpIcon />;
              default:
                return undefined;
            }
          })()}
          key={trend}
          onClick={() =>
            trend === SEARCH
              ? setSearch((s) => ({ ...s, dialogOpen: true }))
              : setTrend(trend === TRENDING ? null : trend)
          }
          clickable
          onDelete={
            trend === SEARCH && !!searchLabel
              ? () => {
                  setSearch((s) => ({
                    ...s,
                    searchMode: false,
                  }));
                }
              : undefined
          }
          className={clsx(
            classes.chip,
            (searchLabel
              ? trend === SEARCH
              : selectedTrend === trend ||
                (selectedTrend === null && trend === TRENDING)) &&
              classes.selectedChip,
            trend === SEARCH && !searchLabel && classes.searchChip
          )}
          color="primary"
        />
      ))}
    </AppBar>
  );
};

export default TrendsPicker;
