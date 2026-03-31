import {useDispatch} from "react-redux";

import { JobPosition } from './JobPosition.jsx';
import {addFilter} from "../filters/filters-slice.js";
import {usePositions} from "./use-positions.js";
import {useFetchPositions} from "./use-fetch-positions.js";

const JobList = () => {
  useFetchPositions()
  const dispatch = useDispatch()
  const positions = usePositions()

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}

export {JobList};