// Zoekbalk
function myFunction() {
  // Declare variables
  var input, filter, ul, a, li, p, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("inhoudstafel");
  a = ul.getElementsByTagName('a');

  // Loop through all anchor tags, and hide those whose list items don't match the search query
  for (i = 0; i < a.length; i++) {
    li = a[i].getElementsByTagName('li')[0];
    p = li.getElementsByTagName('p')[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

// control f
$(document).ready(function(){
  window.addEventListener("keydown", function(e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)){
      if($('#myInput').is(":focus")) {
        return true;
      } else {
        e.preventDefault();
        $('#myInput').focus();
      }
    }
  });
});
