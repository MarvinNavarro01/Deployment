import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect ,useState } from "react";

const Worker_Searchbox = ({ setSearchResults, workers }) => {
  const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        fetchdata();
    },[])

    const fetchdata = () => {
        fetch("http://localhost:8001/account/fetchworker")
        .then((response) => response.json())
        .then((list) => {
            setSearchResults(list)
            setFilterData(list);
        })
        .catch(err => console.log(err));
    }
    
    const handleSearchChange = (value) => {
        value = value.toLowerCase();
        const res = filterData.filter((worker) => {
            return (
                worker && 
                (worker.profile[0].first_name ||worker.profile[0].last_name) && 
                (worker.profile[0].first_name.toLowerCase().includes(value) ||
                worker.profile[0].last_name.toLowerCase().includes(value))
            )
        });
        setSearchResults(res)
  };

  return (
    <div className="searchInput-wrapper">
        <FontAwesomeIcon icon={faSearch} className='searchIcon' />
      <input
        type="text"
        className='px-1'
        placeholder="Search..."
        onChange={e=>handleSearchChange(e.target.value)}
      />
    </div>
  );
};

export default Worker_Searchbox;
