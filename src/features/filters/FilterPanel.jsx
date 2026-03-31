import {Badge} from '../../UI/Badge.jsx';
import {Card} from '../../UI/Card.jsx';
import {Stack} from '../../UI/Stack.jsx';

import {useSelector, useDispatch} from "react-redux";
import {clearFilter, removeFilter, selectFilters} from "./filters-slice.js";

const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters)
  const dispatch = useDispatch()

  if (currentFilters.length === 0) return null;

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(item => (
            <Badge
              key={item}
              variant="clearable"
              onClear={() => dispatch(removeFilter(item))}
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter())}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};