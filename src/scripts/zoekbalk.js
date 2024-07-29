// Zoekbalk
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("inhoudstafel");
  li = ul.getElementsByTagName('a');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].parentElement.style.display = "";
    }
    else {
      li[i].parentElement.style.display = "none";
    }
  }
}
// control f
$(document).ready(function(){

  window.addEventListener("keydown",function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)){
        if($('#myInput').is(":focus")) {
            return true;
        } else {

            e.preventDefault();
            $('#myInput').focus();
        }
    }
})


})
