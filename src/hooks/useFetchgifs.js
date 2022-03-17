import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// custom hook
export const useFetchgifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 1000);
    });
  }, [category]);

  return state;
};
