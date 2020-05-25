import React, { useEffect } from "react";
import {
  Dialog,
  Input,
  DialogContent,
  CircularProgress,
  List,
  ListItem,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import {
  getAutocompleteSuggestions,
  clearAutocomplete,
} from "../Actions/autocomplete_actions";
import { useDebounce } from "../utils";

import styles from "../Styles/search.style";

const useStyles = makeStyles(styles);

const SearchDialog = (props) => {
  const classes = useStyles();
  const suggestions = useSelector((store) => store.autocomplete);
  const dispatch = useDispatch();
  const { config, setSearch } = props;
  const debouncedKey = useDebounce(config.key, 500);

  useEffect(() => {
    dispatch(
      (debouncedKey === "" ? clearAutocomplete : getAutocompleteSuggestions)(
        debouncedKey || undefined
      )
    );
  }, [dispatch, debouncedKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch((s) => ({
      ...s,
      dialogOpen: false,
      searchMode: true,
    }));
  };
  const onOptionClick = (option) => () => {
    setSearch({
      key: option,
      dialogOpen: false,
      searchMode: true,
    });
  };
  return (
    <Dialog
      open={config.dialogOpen}
      onClose={() =>
        setSearch((s) => ({
          ...s,
          dialogOpen: false,
        }))
      }
    >
      <DialogContent className={classes.dialog}>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Search for GIFs"
            value={config.key}
            variant="outlined"
            autoFocus
            className={classes.searchField}
            onChange={(e) => {
              e.persist();
              setSearch((s) => ({ ...s, key: e.target.value }));
            }}
            endAdornment={
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            }
          />
          {suggestions.loading ? (
            <CircularProgress size={40} className={classes.loader} />
          ) : null}
          {config.key && suggestions.query === config.key && (
            <List className={classes.list}>
              {[{ name: config.key }, ...suggestions.list].map(({ name }) => (
                <ListItem
                  key={name}
                  button
                  divider
                  onClick={onOptionClick(name)}
                  className={classes.suggestion}
                >
                  <SearchIcon className={classes.searchIcon} />
                  {name}
                </ListItem>
              ))}
            </List>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
