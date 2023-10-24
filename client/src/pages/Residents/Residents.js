import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Resident_Searchbox from '../../components/Resident_Searchbox'
import { useNavigate } from 'react-router-dom'
import SidebarOpenBtn from '../../components/SidebarOpenBtn'

const Residents = () => {
    const [family, setFamily] = useState([]);
    const navigate = useNavigate();

    const handleViewFam = (famId) => {
        navigate(`/resident/${famId}`);
    }

    return (
        <div className=''>
            <SidebarOpenBtn />
            <div className='mainLayout'>
                <div className='mainLayout-left'>
                    <Sidebar />    
                </div>
                
                <div className='container ps-5 pt-5 mainLayout-right residentLayout'>
                    <div className='row'>
                        <div className="resident_pageHeader d-flex col">
                            <h1 className='ms-5 fw-bold'>Residents</h1>  
                            
                        </div>
                        <div className='col d-flex justify-content-end me-5 pe-4'>
                            <Resident_Searchbox setSearchResults={setFamily} />
                        </div>
                        <div className='resident_pageBody'>
                            <div className='container table-responsive'>
                                <table className="table ResidentFamilyTable ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Family #</th>
                                            <th scope="col"  className='text-start'>Family Name</th>
                                            <th scope="col">Status</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            family && family.map((fam,idx) => (
                                                <tr className='px-5' key={idx}>
                                                    <td>{"FAMLY"+fam._id+"THC"}</td>
                                                    <td className='text-start'>{fam.profile[0].last_name}</td>
                                                    <td>{fam.acc_status}</td>
                                                    <td>
                                                        <button 
                                                            type="button" 
                                                            className="resident_viewFamilyBtn"
                                                            onClick={() => handleViewFam(fam._id)}>
                                                                View Family Profiles
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Residents