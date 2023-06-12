function dropDate() {
  document.getElementById("dateDropdown").classList.toggle("show");
}

function dropTime() {
  document.getElementById("timeDropdown").classList.toggle("show");
}

function dropService() {
  document.getElementById("serviceDropdown").classList.toggle("show");
}

function dropExpert() {
  document.getElementById("expertDropdown").classList.toggle("show");
}

function submit(){
  alert("Booking has been submitted");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}