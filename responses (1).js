function getBotResponse(input) {
    // Book an Appointment
    if (input == "Book an appointment") {
        return window.open('BookingAppointment.html')
    }
    // Book a MIVA Car
    else if (input == "Book a MIVA Car") {
        return window.open('BookaMIVAcar.html')
    }
    else {
        return "Try Again"
    }
}
