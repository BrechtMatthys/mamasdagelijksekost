// -1
function negatief() {
 var oudNummer = (document.location.href.match(/[^\/]+$/)[0]);
 var arr = oudNummer.split('_');
 var nieuwNummer = arr[arr.indexOf('recept') + 1];
 var pageDown = parseInt(nieuwNummer) - 1+'.html';
 $(location).attr('href', pageDown);
}
// +1
function positief() {
  var oudNummer = (document.location.href.match(/[^\/]+$/)[0]);
  var arr = oudNummer.split('_');
  var nieuwNummer = arr[arr.indexOf('recept') + 1];
  var pageUp = parseInt(nieuwNummer) + 1+'.html';
  $(location).attr('href', pageUp);
}
// pijltje links
$(document).keydown(function(e){
    if (e.keyCode == 37) {
    negatief()
    }
});
// pijltje rechts
$(document).keydown(function(e){
    if (e.keyCode == 39) {
   positief()
    }
});
