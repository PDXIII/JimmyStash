$body = $('body');


function init(){
  $('.fittext01').fitText(.55);
  $('.fittext02').fitText(1);
  $('.fittext03').fitText(0.3);
  $('.fittext04').fitText(0.25);
  $('.fittext05').fitText(0.7);

  // $('#about').hide();
  $body.jKit();

}

function readAbout(){
  $('#about').slideToggle();
}

onload=function (){
  init();
}

onresize=function (){
  init();
}