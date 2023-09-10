import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar.js'
import Searchbox from '../../components/Services_Searchbox.js'
import { useNavigate } from 'react-router-dom'

const Immunization = () => {
    const [patient, setPatient] = useState([]);
    const navigate = useNavigate();

    const handleViewMedHis = (pateint) => {
        navigate(`/immunization/${pateint.profile_id}`, 
            {state:
                {patientdata: pateint}
            });
    }
    return (
        <div className=''>
            <div className='mainLayout'>
                <div className='mainLayout-left'>
                    <Sidebar />    
                </div>
                <div className='container mainLayout-right p-0'>
                    <div className="sp1-pageHeader d-flex justify-content-around">
                        <h1>Immunization</h1>  
                        <Searchbox setSearchResults={setPatient} />
                    </div>
                    <div className='sp1-pageBody'>
                        <div className='container'>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between px-5 align-middle">
                                    <h6>Patient Name</h6>
                                </li>
                                {
                                    patient && 
                                        patient.map((pwr, idx) => (
                                            <li className="list-group-item d-flex justify-content-between px-5 py-3 align-middle" key={idx}>
                                                <h6>{
                                                    pwr.first_name + " " + (pwr.middle_name).charAt(0) + ". " + pwr.last_name + " "
                                                }</h6>
                                                <button 
                                                    type="button" 
                                                    className="btn viewBtn"
                                                    onClick={() => handleViewMedHis(pwr)}>
                                                        View Medical History
                                                </button>
                                            </li>            
                                        ))
                                }
                                {
                                     !patient[0] && 
                                     (
                                        <li className="list-group-item d-flex justify-content-center px-5 py-3 align-middle">
                                                <p >NO RECORDS FOUND</p>
                                            </li>    
                                     )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Immunization