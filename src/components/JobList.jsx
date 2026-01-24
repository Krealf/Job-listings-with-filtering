import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import { JobPosition } from './JobPosition';
import {selectVisiblePositions} from "../store/positions/position-selectors.js";
import {addFilter} from "../store/filters/filters-actions.js";
import {selectFilters} from "../store/filters/filters-selectors.js";

const JobList = () => {
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilters))
  const dispatch = useDispatch()

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