import { useState, useEffect, useCallback } from "react";
import { get } from "lodash";

export const useDebounce = (value, delay) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
};

export const makeQueryString = (params) =>
  Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");

export const useInfiniteScroll = (scrollRef, threshold, setPage) => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > threshold) {
            setPage((p) => p + 1);
          }
        });
      }).observe(node);
    },
    [setPage, threshold]
  );
  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
};

export const makeImageColumns = (list, heightPath, columnCount) => {
  const columns = [];
  Array(columnCount)
    .fill()
    .forEach(() => {
      columns.push({ height: 0, list: [] });
    });
  list.forEach((imageData) => {
    // find index of column with least net height
    const minHeightIndex = columns.reduce(
      (acc, curr, colIndex) =>
        curr.height < columns[acc].height ? colIndex : acc,
      0
    );
    // push current image into selected column
    columns[minHeightIndex].list.push(imageData);
    // add current image height to selected column's net height
    const imageHeight = parseInt(get(imageData, heightPath, 200), 10);
    columns[minHeightIndex].height += imageHeight;
  });
  return columns;
};

export const useWindowSize = () => {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};
