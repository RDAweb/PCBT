 // Function to set the viewport scale dynamically
function setViewport() {
var viewportMeta = document.querySelector("meta[name='viewport']");

// Check the device type
if (window.innerWidth <= 600) {
// Mobile devices
viewportMeta.setAttribute("content", "width=device-width, initial-scale=0.4");
} else if (window.innerWidth <= 1024) {
// Tablet devices
viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0");
} else {
// Desktop devices
viewportMeta.setAttribute("content", "width=device-width, initial-scale=0.4");
}
}

// Call the function on page load
window.onload = setViewport;

function openForm() {
    // Show the form by adding the "active" class
    document.getElementById("formContainer").classList.add("active");

    // Move the left button to the right with the form
    document.getElementById("leftButton").classList.add("move-right");
}

function closeForm() {
    // Hide the form by removing the "active" class
    document.getElementById("formContainer").classList.remove("active");

    // Move the left button back to its original position
    document.getElementById("leftButton").classList.remove("move-right");
}

function toggleDiv() {
  const afterHealthDiv = document.querySelector('.afterhealth');
  afterHealthDiv.classList.toggle('show');
}
function sectoggleDiv() {
  const afterHealthDiv = document.querySelector('.Afterg');
  afterHealthDiv.classList.toggle('show');
}

function emailSend(){

    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messagebody = "name" + userName +
    "<br/> phone" + phone +
    "<br/> Email" + email;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ravindergod001tbdl@gmail.com",
        Password : "F542CE8549806F00E1088AC8A801BA66D1B7",
        To : 'musicreport69@gmail.com',
        From : "ravindergod001tbdl@gmail.com",
        Subject : "This is the subject",
        Body : messagebody
    }).then(
      message => alert(message)
    );

}

