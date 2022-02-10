function validateForm() {
  var FullName = document.forms["form-group"]["FullName"].value;
  var Email = document.forms["form-group"]["Email"].value;
  var Date = document.forms["form-group"]["Date"].value;
  var Time = document.forms["form-group"]["Time"].value;
  var City = document.forms["form-group"]["City"].value;
  var AcceptedCards = document.forms["form-group"]["Accepted-Cards"].value;
  var Nameoncard = document.forms["form-group"]["Nameoncard"].value;
  var Creditcardnumber = document.forms["form-group"]["Creditcardnumber"].value;
  var expmonth = document.forms["form-group"]["expmonth"].value;
  var expyear = document.forms["form-group"]["expyear"].value;
  var CVV = document.forms["form-group"]["CVV"].value;

  if (FullName == "") {
    alert("Full Name must be filled out");
  }
  else if (Email == "") {
    alert("Email must be filled out");
  }
  else if (Date == "") {
    alert("Date must be filled out");
  }
  else if (Time == "") {
    alert("Time must be filled out");
  }
  else if (City == "") {
    alert("City must be filled out");
  }
  else if (AcceptedCards == "") {
    alert("Accepted Cards must be filled out");
  }
  else if (Nameoncard == "") {
    alert("Name on card must be filled out");
  }
  else if (Creditcardnumber == "") {
    alert("Credit Card Number must be filled out");
  }
  else if (expmonth == "") {
    alert("Exp month must be filled out");
  }
  else if (expyear == ""){
    alert("Exp year must be filled out");
  }
  else if (CVV == ""){
    alert("CVV must be filled out")
  }
  else {
    return "Payment Successful Page.html"
  }
}