// placeholders for the form inputs
var reservationDate = "";
var reservationTime = "";
var reservationPeople = "";
var reservationName = "";
var reservationTelNumber = "";
var reservationEmail = "";

const date = new Date();
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = date.getHours() + ":" + date.getMinutes();
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = new Date().toJSON().slice(0, 10);

// function to collect the values the user is inputting by accessing the input value 
function collectReservationFormInputs() {
    reservationDate = document.getElementsByName("reservation-date")[0].value;
    reservationTime = document.getElementsByName("reservation-time")[0].value;
    reservationPeople = document.getElementsByName("reservation-people")[0].value;
    reservationName = document.getElementsByName("reservation-name")[0].value;
    reservationTelNumber = document.getElementsByName("reservation-number")[0].value;
    reservationEmail = document.getElementsByName("reservation-email")[0].value;
}

// function to replace initial reservation form (checking for a table) with the subsequent contact form
function displayContactForm() {
    $("#reservation-form").css("display","none");
    $("#contact-form").css("display","flex");
    $("#available-table-message").css("display","block");
}

// function to replace the contact form with a confirmation message (reservation has been booked) 
function displayConfirmationMessage() {
    $("#contact-form").css("display","none");
    $("#available-table-message").css("display","none");
    $("#reservation-confirmation-message").text(String(reservationName) + ", thank you for booking a table with us! Your reservation has been confirmed. Please check your email for details.");
    $("#reservation-confirmation-message").css("display","block");
}


// to prevent reloading of page upon submission of forms  
$("#reservation-form").submit(function(e) {
    e.preventDefault();
});

$("#contact-form").submit(function(e) {
    e.preventDefault();
});