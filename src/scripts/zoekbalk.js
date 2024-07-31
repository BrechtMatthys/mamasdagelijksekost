function myFunction() {
  // Declare variables
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("inhoudstafel");
  var li = ul.getElementsByTagName('li');
  
  // Loop through all list items and hide those who don't match the search query
  for (var i = 0; i < li.length; i++) {
    var txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      // Move the matching element to the beginning of the list
      ul.insertBefore(li[i], ul.firstChild);
    } else {
      // Hide the non-matching element
      li[i].style.display = "none";
    }
  }
}

// control f
$(document).ready(function() {
  window.addEventListener("keydown", function(e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
      const myInput = document.getElementById('myInput');
      if (!myInput.matches(":focus")) {
        e.preventDefault();
        myInput.focus();
      }
    }
  });
});