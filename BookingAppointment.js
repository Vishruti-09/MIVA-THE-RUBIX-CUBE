function validateForm() {
  var Name = document.forms["form-group"]["Name"].value;
  var Email = document.forms["form-group"]["Email"].value;
  var ContactNumber = document.forms["form-group"]["Contact Number"].value;
  var Date = document.forms["form-group"]["Date"].value;
  var Time = document.forms["form-group"]["Time"].value;
  var HospitalName = document.forms["form-group"]["HospitalName"].value;
  var DoctorName = document.forms["form-group"]["DoctorName"].value;
  var PatientAge = document.forms["form-group"]["PatientAge"].value;
  
  if (Name == "") {
    alert("Name must be filled out");
    
  }
  if (Email == "") {
    alert("Email must be filled out");
    
  }
  else if (ContactNumber == "") {
    alert("ContactNumber must be filled out");
    
  }
  else if (Date == "") {
    alert("Date must be filled out");
    
  }
  else if (Time == "") {
    alert("Time must be filled out");
  
  }
  else if (HospitalName == "") {
    alert("HospitalName must be filled out");
  
  }
  else if (DoctorName == "") {
    alert("DoctorName must be filled out");
   
  }
  else if (PatientAge == "") {
    alert("PatientAge must be filled out");  
  }
  else {
    return window.open('Book A MIVA Car/Payment.html')
  }
}