function validateForm() {
  var From = document.forms["form-group"]["From"].value;
  var HospitalDestination = document.forms["form-group"]["Hospital-Destination"].value;
  var Date = document.forms["form-group"]["Date"].value;
  var Time = document.forms["form-group"]["Time"].value;
  var BookingType = document.forms["form-group"]["BookingType"].value;
  var PatientAge = document.forms["form-group"]["PatientAge"].value;
  var FullName = document.forms["form-group"]["FullName"].value;
  var PhoneNumber = document.forms["form-group"]["PhoneNumber"].value;
  var Email = document.forms["form-group"]["Email"].value;
  if (From == "") {
    alert("From must be filled out");
    
  }
  if (HospitalDestination == "") {
    alert("Hospital Destination must be filled out");
    
  }
  else if (Date == "") {
    alert("Date must be filled out");
    
  }
  else if (Time == "") {
    alert("Time must be filled out");
    
  }
  else if (BookingType == "") {
    alert("Booking Type must be filled out");
  
  }
  else if (PatientAge == "") {
    alert("Patient Age must be filled out");
  
  }
  else if (FullName == "") {
    alert("Full Name must be filled out");
   
  }
  else if (PhoneNumber == "") {
    alert("Phone Number must be filled out");
  
  }
  else if (Email == "") {
    alert("Email must be filled out");
  
  }
  else {
    return window.open('Payment/Payment.html') 
  }
}