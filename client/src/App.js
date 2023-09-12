import './stylesheets/App.css';
import './stylesheets/Login_stylesheet.css';
import './stylesheets/Sidebar_stylesheet.css';
import './stylesheets/Searchbar_stylesheet.css';
import './stylesheets/Residents_stylesheet.css';
import './stylesheets/ServicesMainPage_stylesheet.css';
import './stylesheets/ServicesSecondPage_stylesheet.css';
import './stylesheets/ServicesThirdPage_stylesheet.css';
import './stylesheets/ServicesPnInD_stylesheet.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Registration from './pages/Registration';
import Sidebar from './components/Sidebar';

import Dental from './pages/Dental/Dental';
import DentalSpecificResident from './pages/Dental/DentalSpecificResident';
import DentalSpecificRecord from './pages/Dental/DentalSpecificRecord';
import MedicalCheckUp from './pages/MedicalCheckUp/MedicalCheckUp';
import MedicalCheckUpSpecificResident from './pages/MedicalCheckUp/MedicalCheckUpSpecificResident';
import MedicalCheckUpSpecificRecord from './pages/MedicalCheckUp/MedicalCheckUpSpecificRecord';
import Residents from './pages/Residents/Residents';
import ResidentsSpecificFamily from './pages/Residents/ResidentsSpecificFamily';
import ResidentsSpecificResident from './pages/Residents/ResidentsSpecificResident';
import FamilyPlanning from './pages/FamilyPlanning/familyPlanning';
import FamilyPlanningSpecificResident from './pages/FamilyPlanning/familyPlanningSpecificResident';
import FamilyPlanningAllRecords from './pages/FamilyPlanning/familyPlanningAllRecords';
import FamilyPlanningSpecificResidentRecord from './pages/FamilyPlanning/familyPlanningSpecificResidentRecord';
import Prenatal from './pages/Prenatal/Prenatal';
import PrenatalSpecificResident from './pages/Prenatal/PrenatalSpecificResident';
import PrenatalSpecificRecord from './pages/Prenatal/PrenatalSpecificRecord';
import Immunization from './pages/Immunization/Immunization';
import ImmunizationSpecificResident from './pages/Immunization/ImmunizationSpecificResident';
import ImmunizationSpecificRecord from './pages/Immunization/ImmunizationSpecificRecord';
import Laboratory from './pages/Laboratory/Laboratory';
import Hematology from './pages/Laboratory/Hematology';
import HematologySpecificResident from './pages/Laboratory/HematologySpecificResident';
import HematologySpecificRecord from './pages/Laboratory/HematologySpecificRecord';
import Urinalysis from './pages/Laboratory/Urinalysis';
import UrinalysisSpecificResident from './pages/Laboratory/UrinalysisSpecificResident';
import UrinalysisSpecificRecord from './pages/Laboratory/UrinalysisSpecificRecord';

function App() {
  return (
    <div className="App ">
      
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Registration />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/prenatal" element={<Prenatal />} />
          <Route path="/prenatal/:residentid" element={<PrenatalSpecificResident />} />
          <Route path="/prenatal/specres/record" element={<PrenatalSpecificRecord />} />
          <Route path="/immunization" element={<Immunization />} />
          <Route path="/immunization/:residentid" element={<ImmunizationSpecificResident />} />
          <Route path="/immunization/specres/record" element={<ImmunizationSpecificRecord />} />
          <Route path="/medicalcheckup" element={<MedicalCheckUp />} />
          <Route path="/medicalcheckup/:residentid" element={<MedicalCheckUpSpecificResident />} />
          <Route path="/medicalcheckup/:residentid/:recordid" element={<MedicalCheckUpSpecificRecord />} />
          <Route path="/dental" element={<Dental />} />
          <Route path="/dental/:residentid" element={<DentalSpecificResident />} />
          <Route path="/dental/specres/record" element={<DentalSpecificRecord />} />
          <Route path="/resident" element={<Residents />} />
          <Route path="/resident/:familyid" element={<ResidentsSpecificFamily />} />
          <Route path="/resident/:familyid/:profile_id" element={<ResidentsSpecificResident />} />
          <Route path="/familyplanning" element={<FamilyPlanning />} />
          <Route path="/familyplanning/:residentid" element={<FamilyPlanningSpecificResident />} />
          <Route path="/familyplanningallrecords/:residentid" element={<FamilyPlanningAllRecords />} />
          <Route path="/familyplanningspecificresidentrecord/:residentid" element={<FamilyPlanningSpecificResidentRecord />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/hematology" element={<Hematology />} />
          <Route path="/hematology/:residentid" element={<HematologySpecificResident />} />
          <Route path="/hematology/:residentid/:recordid" element={<HematologySpecificRecord />} />
          <Route path="/urinalysis" element={<Urinalysis />} />
          <Route path="/urinalysis/:residentid" element={<UrinalysisSpecificResident />} />
          <Route path="/urinalysis/:residentid/:recordid" element={<UrinalysisSpecificRecord />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
