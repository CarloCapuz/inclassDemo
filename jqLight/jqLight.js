$(document).ready(function(){
  $('.switch').on('click', function(event) {
    if ($('#check').prop('checked')) {
      lightsOnOff("black", "OFF", "white");
    }
    else {
      lightsOnOff("white", "ON", "black");
    }
  });
});

function lightsOnOff(background, txt, txtColor){
  $("body").css("background", background);
  $("#status").text(txt);
  $("#status").css("color", txtColor);

}
