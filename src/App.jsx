import { FilterPanel } from './features/filters/FilterPanel.jsx';
import { JobList } from './features/positions/JobList.jsx';
import { TheHeader } from './components/TheHeader';

function App() {
  return (
    <>
      <TheHeader />
      <div className='container'>
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
