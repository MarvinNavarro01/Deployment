import axios from 'axios';
import React , { useState } from 'react'
import toast from 'react-hot-toast'

const AdditionImmunization= ({residentid}) => {
    const [birthWeight, setbirthWeight] = useState("");
    const [placeOfDelivery, setplaceOfDelivery] = useState("");
    const [typeOfFeeding, settypeOfFeeding] = useState("");
    const [dateOfNewbornScreening, setDateOfdateOfNewbornScreening] = useState("");
    
   
    const requiredFields = [
        birthWeight, placeOfDelivery, typeOfFeeding, dateOfNewbornScreening
      ];
    
      const isEveryFieldFilled = requiredFields.every(value => value !== "");
    
      const addRecSubmit = async (event) => {
        event.preventDefault();
        try{
          if(isEveryFieldFilled){
            const userId = sessionStorage.getItem("profileId");
            const fetchServiceProvider = await axios.get(`/profile/${userId}`);
            const serviceProvider = "Dr. "+ fetchServiceProvider.data.last_name;
            
            const response = await axios.post(`/childhealth/add/${residentid}`,{birthWeight, placeOfDelivery, typeOfFeeding, dateOfNewbornScreening, serviceProvider});
           
            if(response.status === 200){
              toast.success("Immunization Record Successfully Added");
              setTimeout(() => {
                window.location.reload();
              }, 500);
            }

          }
          
        } catch (error){
          console.log(error)
        }
      }

  return (
    <div className="modal fade" id="IAddition" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
    <div className="modal-content">
       <div className="modal-header">
           <h1 className="modal-title fs-5" id="exampleModalLabel">Immunization Form</h1>
           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> 
        <div className="modal-body">
        <form >
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Birth Weight</label>
                <input type="text"  className="form-control Addition_Immunization_textarea" 
                    id="exampleFormControlTextarea1" 
                    placeholder='Kg.'
                    value={birthWeight}
                    onChange={e => setbirthWeight(e.target.value)}
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Place of Delivery</label>
                <input type="text"  className="form-control Addition_Immunization_textarea" 
                    id="exampleFormControlTextarea1" 
                    value={placeOfDelivery}
                    onChange={e => setplaceOfDelivery(e.target.value)}
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
        </div>
        <div className="row mb-5">
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Type of Feeding</label>
                <select 
                  id="inputState" 
                  className="form-select"
                  onChange={e => settypeOfFeeding(e.target.value)}
                  style={{backgroundColor: "#CCE8DE"}}>
                  <option value="N/A" >Choose...</option>
                  <option value="DBF">Direct Breastfeeding</option>
                  <option value="P&F">Pumping and Bottle Feeding</option>
                  <option value="FF">Formula Feeding</option>
                  <option value="SFF">Solid Food Feeding</option>
                </select>               
            </div>
            <div className="col text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Date Of Newborn Screening</label>
                <input type="date"  className="form-control Addition_Immunization_textarea" 
                    id="exampleFormControlTextarea1" 
                    value={dateOfNewbornScreening}
                    onChange={e => setDateOfdateOfNewbornScreening(e.target.value)}
                    style={{backgroundColor: "#CCE8DE"}}/>
               
            </div>
        </div>
        </form>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="sp2-addMCButton" onClick={addRecSubmit}>Save</button>
        </div>
      </div>
    </div>
</div>
  )
}

export default AdditionImmunization