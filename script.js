let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");
let autoSlideInterval;

// Function to show the current slide
function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  const offset = -slideIndex * 100 + '%';
  document.getElementById("slides").style.transform = `translateX(${offset})`;
}

// Next and Previous buttons
function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}



// Auto slide
function autoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 4000); // Change slide every 3 seconds
}

// Start auto slide on page load
window.onload = function() {
  autoSlide();
  showSlide(slideIndex);
};

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