import JobComponent from './components/jobsComponents';
import { useState, useEffect } from 'react';
import data from "./assets/data.json";
function App() {
  const [jobs, setJobs] = useState([]); 
  const [filters, setFilters] = useState([]);
  useEffect(() => setJobs(data), []);

  const filterFunc = (job) => { 
    const tags = [ 
      job.role,
      job.level,
      ...job.languages || [],
      ...job.tools || []
    ];

    if (filters.length === 0) { 
      return true;
    }
    return filters.every(filter=> tags.includes(filter)) 
  }

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }

  const handleFilter = (passedFilter) => {
    setFilters(filters.filter(f => f !== passedFilter))
  };

  const clearFilter = ()=>{ 
    setFilters([]);
  }

  const filterJobs = jobs.filter(filterFunc); 

  return (
    <div className="App">
      <header>
      </header>

      {
        filters.length > 0 && ( 
          <div id="search">
            {filters.map( 
              (filter, indice) =>                
                <span key={indice} onClick={() => handleFilter(filter)}>
                  {filter}
                </span>
            )}                                   
            <button className="clear" onClick={clearFilter}>Clear</button> 
          </div>
        )
      }

      {                                                                                  
        jobs.length === 0 ? (<p>Se esta cargando...</p>) : (filterJobs.map((job) => <JobComponent job={job} key={job.id} handleTagClick={handleTagClick} />))
      }
    </div>
  );
}

export default App;

