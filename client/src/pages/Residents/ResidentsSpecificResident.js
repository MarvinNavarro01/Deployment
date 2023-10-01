
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import EditResidentProfile from '../../components/EditResidentProfile';

const ResidentsSpecificResident = () => {
  const { profile_id } = useParams();
  const [resident, setResident] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/profiles/"+ profile_id).then((res) => {
      return res.json();
    }).then((resp) => {
      setResident(resp);
    }).catch((err) => {
      console.log(err.message);
    })


  }, []);

  const handleBack = () => {
    window.history.back()
}

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
        <div className='col p-0'>
          <div className="resident_pageHeader d-flex justify-content-around">
              <h1>Resident Profile</h1>  
              <span></span>
          </div>
          <div className='resident_pageBody'>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <table class="residentDetail_table table table-borderless text-start w-75">
                    <tbody>
                      <tr>
                        <th scope="row">First Name:</th>
                        <td >{resident.first_name}</td>
                      </tr>
                      <tr>
                        <th scope="row">Middle Name:</th>
                        <td>{resident.middle_name}</td>
                      </tr>
                      <tr>
                        <th scope="row">Last Name:</th>
                        <td>{resident.last_name}</td>
                      </tr>
                      <tr>
                        <th scope="row">Birth Date:</th>
                        <td>{resident.birthDate}</td>
                      </tr>
                      <tr>
                        <th scope="row">Civil Status:</th>
                        <td>{resident.civilStatus}</td>
                      </tr>
                      <tr>
                        <th scope="row">Relationship:</th>
                        <td>
                          {
                            (resident.relationship === 1 && ("Father of the Family")) ||
                            (resident.relationship === 2 && ("Mother of the Family")) ||
                            (resident.relationship > 2 && ("Children of the Family"))
                          }
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"> Nationality:</th>
                        <td>{resident.nationality}</td>
                      </tr>
                      <tr>
                        <th scope="row">Educational Attainment:</th>
                        <td>{resident.educAttain}</td>
                      </tr>
                      <tr>
                        <th scope="row">Occupation:</th>
                        <td>{resident.occupation}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col">
                  <table class="residentDetail_table table table-borderless text-start w-75">
                    <tbody>
                      <tr>
                        <th scope="row">Status:</th>
                        <td >{resident.status}</td>
                      </tr>
                      <tr>
                        <th scope="row">Gender:</th>
                        <td>{resident.gender}</td>
                      </tr>
                      <tr>
                        <th scope="row">Age:</th>
                        <td>{resident.age + " Years Old"}</td>
                      </tr>
                      <tr>
                        <th scope="row">Phone Number:</th>
                        <td>{resident.contactNo}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='residentProfile_footer d-flex justify-content-between'>
                <button 
                    type="button"
                    className="residentBackBtn float-start"
                    onClick={() => handleBack()}>
                        <FontAwesomeIcon icon={faArrowLeft}/> Back
                </button>
                <div className='d-flex flex-column mb-3'>
                  {/* Button trigger modal */}
                  <button type="button" class="residentEditBtn" data-bs-toggle="modal" data-bs-target="#editResidentProfileModal">
                    Edit Resident Profile
                  </button>
                  <button type="button" class="residentViewMedHisBtn">
                    View Medical History
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditResidentProfile />
    </div>
    
  )
}

export default ResidentsSpecificResident