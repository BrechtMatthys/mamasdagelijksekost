// Zoekbalk
function myFunction() {
  // Declare variables
  const input = document.getElementById('myInput');
  const filter = input.value.toUpperCase();
  const ul = document.getElementById("inhoudstafel");
  const li = Array.from(ul.getElementsByTagName('li'));
  
  // Loop through all list items, and hide those who don't match the search query
  li.forEach(item => {
    const a = item.getElementsByTagName("a")[0];
    const txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
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
