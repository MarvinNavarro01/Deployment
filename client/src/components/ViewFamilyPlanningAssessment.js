import React from 'react'

const ViewFamilyPlanningAssessment = ({record}) => {   

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <div className="modal fade" id="fpAssesView" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel1">Family Planning Assessment</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='container mb-4'>
                            <div className='container fw-bold row'>
                            <h5 style={{color: "#8EC3B0"}} className='text-start '>Session Finding {record._id?record._id.slice(-6): ""}</h5>

                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Date:   </label>
                                 
                                    <span className='fw-normal'> {record? formatDate(record.createdAt) : ""}</span>
                                </div>
                            </div>

                            <div className='container fw-bold row'>
                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Weight:</label>
                                  
                                    <span className='fw-normal'> {record? record.vitalSign.weight : ""} kg.</span>
                                </div>
                            </div>

                            <div className='container fw-bold row'>
                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Height:   </label>
                                   
                                    <span className='fw-normal'> {record? record.vitalSign.height : ""} cm.</span>
                                </div>
                            </div>

                            <div className='container fw-bold row'>
                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Temperature:   </label>
                                   
                                    <span className='fw-normal'> {record? record.vitalSign.temp : ""}</span>
                                </div>
                            </div>

                            <div className='container fw-bold row'>
                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Findings:   </label>
                                    <span className='fw-normal'> {record? record.findings : ""}</span>
                                </div>
                            </div>

                            <div className='container fw-bold row'>
                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Method Accepted:   </label>
                                    <span className='fw-normal'> {record? record.methodAccepted : ""}</span>
                                </div>
                            </div>

                            <div className='container fw-bold row'>
                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Service Provider:   </label>
                                    <span className='fw-normal'> {record? record.serviceProvider : ""}</span>
                                </div>
                            </div>

                            <div className='container fw-bold row'>
                                <div className="col mx-5 mt-3 text-start">
                                    <label className='fw-bold'>Date of Follow Up Visit:   </label>
                                    <span className='fw-normal'> {record? record.dateOfFollowUpVisit : ""}</span>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        
    )
}

export default ViewFamilyPlanningAssessment