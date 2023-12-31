import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import AdditionalHematology from '../../components/AdditionalHematology.js'
import axios from 'axios'
import THCDefaultPatientLogo from '../../images/default_image.png'
import SidebarOpenBtn from '../../components/SidebarOpenBtn.js'
import ViewVitalSigns from '../../components/ViewVitalSigns.js'

const HematologySpecificResident = () => {
    const { residentid } = useParams();
    const [patientinfo, setPatientInfo] = useState([]);
    const [records, setRecords] = useState([]);
    const [serviceProviderName, setServiceProviderName] = useState("");
    const [selectedVSId, setSelectedVSId] = useState(null);
    const [vitalSignRecs, setVitalSignRecs] = useState([]);
    const [selectedVSRec, setSelectedVSRec] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        patientInformation();
        recordsList();
        getServiceProvider();
        vitalSignList();
    }, [])

    const patientInformation = async () => {
        await axios.get("/profile/" + residentid)
            .then((response) => {
                setPatientInfo(response.data)
        })
    }

    const recordsList = async () => {
        try {
            const fetchHR = await axios.get(`/hematology/${residentid}`);
            setRecords(fetchHR.data.medical_records);
        } catch (error) {
            console.log(error);
        }
    }

    const vitalSignList = async () => {
        try {
            const fetchVS = await axios.get(`/vitalsign/${residentid}`);
            setVitalSignRecs(fetchVS.data.vital_signs);
        } catch (error) {
            console.log(error);
        }
    }

    const formatAge = (dateString) => {
        const dateOfBirth = new Date(dateString);

        // Calculate the age
        const now = new Date();
        const age = now.getFullYear() - dateOfBirth.getFullYear();
        const monthDiff = now.getMonth() - dateOfBirth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dateOfBirth.getDate())) {
            return age - 1;
        }

        return age;
    };

    const handleRowClickVS = (recordid, record) => {
        setSelectedVSId(recordid);
        setSelectedVSRec(record);
    }

    const navigateRecord = (recordid) => {
        navigate(recordid);
    }

    const handleBack = () => {
        window.history.back()
    }

    function formatDateToWords(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }

    const handleDate = (date) => {
        const dateTimeString = date;
        const dateTime = new Date(dateTimeString);
        const dateString = dateTime.toISOString().split('T')[0];
        const readableDate = formatDateToWords(dateString);

        return readableDate;
    }

    const getServiceProvider = async() => {
        const userId = sessionStorage.getItem("profileId");
        const fetchServiceProvider = await axios.get(`/profile/${userId}`);
        const serviceProvider = fetchServiceProvider.data.first_name+" "+fetchServiceProvider.data.last_name;
        setServiceProviderName(serviceProvider);
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        } else {
        return "Invalid Date";
        }
    }

    return (
        <>
        <div className=''>
            <SidebarOpenBtn />
            <div className='mainLayout'>
                <div className='mainLayout-left'>
                    <Sidebar />    
                </div>
                <div className='col p-0'>
                    <div className="sp2-pageHeader container">
                        <h1 className='text-start'>Hematology Records</h1>  
                    </div>
                    <div className='sp2-pageBody'>
                        <div className='container-fluid p-5'>
                            <div className='row'>
                                <div className='col-md-4 col-sm-12 sp2-topDiv'>
                                    <h5 className="text-start">Personal Information</h5>
                                    <div className='sp2-personalInfoDiv'>
                                        <div className="mb-3" style={{maxWidth: "540px"}}>
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={THCDefaultPatientLogo} height="80px" width="80px" alt="default_image.png" style={{marginTop:5}}/>
                                                </div>
                                                <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{patientinfo.first_name + " "+ patientinfo.middle_name + " " + patientinfo.last_name}</h5>
                                                    <p className="card-text">{patientinfo.gender + ", "+ patientinfo.civilStatus}</p>
                                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <table className="">
                                            <tbody>
                                                <tr>
                                                    <td>Age:</td>
                                                    <td>{formatAge(patientinfo.birthDate)} Years Old</td>
                                                </tr>
                                                <tr>
                                                    <td>Birth Date:</td>
                                                    <td>{formatDate(patientinfo.birthDate)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Birth Place:</td>
                                                    <td>{patientinfo.birthPlace}</td>
                                                </tr>
                                                <tr>
                                                    <td>Occupation:</td>
                                                    <td>{patientinfo.occupation}</td>
                                                </tr>
                                                <tr>
                                                    <td>Address:</td>
                                                    <td>{patientinfo.street + " "+ patientinfo.barangay + " " + patientinfo.municipality+ " " + patientinfo.zipCode}</td>
                                                </tr>
                                            </tbody>
                                        </table>    
                                    </div>
                                </div>
                                <div className='col-md-8 col-sm-12 sp2-bottomDiv'>
                                    <div className='sp2-MCRecordsDiv'>
                                        <table className="table sp2-MCRecordsTable">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th style={{width:"400px"}}>List of Hematology Records</th>
                                                    <th></th>
                                                    <th style={{textAlign:"end"}}>
                                                        {
                                                            (sessionStorage.getItem("workerType") === "Medtech" || sessionStorage.getItem("workerType") === "Superadmin")? (
                                                                <button type="button" className="sp2-addMedRecBtn" data-bs-toggle="modal" data-bs-target="#FPAddition"><FontAwesomeIcon icon={faPlus}/></button>
                                                            ): ""
                                                        }
                                                        </th> 
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td>Record Number Code</td>
                                                    <td>Doctor</td>
                                                    <td>Date of Record</td> 
                                                </tr>
                                                {
                                                    records && records.map((rec,idx) => {
                                                        if(rec.service_id !== null){
                                                            return (
                                                                <tr 
                                                                    className='sp2-clickableMCRRow' 
                                                                    key={idx}
                                                                    onClick={() => navigateRecord(rec.service_id._id)}
                                                                >
                                                                    <td></td>
                                                                    <td>{rec.service_id._id.slice(-6)}</td>
                                                                    <td>{rec.service_id.serviceProvider}</td>
                                                                    <td>{handleDate(rec.service_id.createdAt)}
                                                                    </td>
                                                                </tr>
                                                            )
                                                        } else {
                                                            return null;
                                                        }
                                                    })
                                                }
                                            </tbody>
                                        </table>    
                                    </div>
                                    
                                    {/* Vital Signs */}
                                    <div className='sp2-MCRecordsDiv my-3'>
                                            <table className="table sp2-MCRecordsTable">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th style={{maxWidth:"400px"}}>Vital Signs</th>
                                                        <th></th> 
                                                        <th style={{textAlign:"end"}}></th> 
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td>Record Number Code</td>
                                                        <td> </td>
                                                        <td>Date of Record</td> 
                                                    </tr>
                                                    {
                                                        vitalSignRecs && vitalSignRecs.map((rec, idx) => {
                                                            if (rec._id !== null) {
                                                                return (
                                                                    <tr
                                                                        className='sp2-clickableMCRRow'
                                                                        key={idx}
                                                                        data-bs-toggle="modal" data-bs-target="#VitalSignView"
                                                                        onClick={() => handleRowClickVS(rec._id, rec)}
                                                                    >
                                                                        <td> </td>
                                                                        <td>{rec._id.slice(-6)}</td>
                                                                        <td> </td>
                                                                        <td>{formatDate(rec.createdAt)}</td>
                                                                    </tr>
                                                                );
                                                            } else {
                                                                return null;
                                                            }
                                                        
                                                        })
                                                    }
                                                    {
                                                        vitalSignRecs.length === 0 && (
                                                            <tr className='sp2-clickableMCRRow'>
                                                                <td></td>
                                                                <td></td>
                                                                <td><p >NO RECORDS FOUND</p></td>
                                                                <td></td>
                                                                
                                                            </tr>
                                                        )
                                                    }
                                                        
                                                </tbody>
                                            </table>     
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <button 
                        type="button"
                        className="sp2-servicesBackBtn float-start"
                        onClick={() => handleBack()}>
                            <FontAwesomeIcon icon={faArrowLeft}/> Back
                    </button>
                </div>
            </div>  
        </div>

        {/* Modal  */}
        <AdditionalHematology residentid={patientinfo._id} serviceProviderName={serviceProviderName}/>
        

        {/*View Vital Sign Modal  */}
        <ViewVitalSigns recordid={selectedVSId} record={selectedVSRec}/>
    </>
    )
}

export default HematologySpecificResident