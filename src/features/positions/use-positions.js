import {selectFilters} from "../filters/filters-slice.js";
import {useSelector} from "react-redux";
import {selectVisiblePositions} from "./position-slice.js";

export const usePositions = () => {
  const currentFilters = useSelector(selectFilters)

  return useSelector((state) => selectVisiblePositions(state, currentFilters))
}