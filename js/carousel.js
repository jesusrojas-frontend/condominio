$(document).ready(function(){
  // $('.carousel').carousel({
  //     interval: 10000 //changes the speed
  // });
  $('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    e.target // newly activated tab
    e.relatedTarget // previous active tab
  });
  $('#myTabs a[href="#profile"]').tab('show') // Select tab by name
  $('#myTabs a:first').tab('show') // Select first tab
  $('#myTabs a:last').tab('show') // Select last tab
  $('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
  // #myCarousel
  $('#myCarousel').on('click', function(e){
   e.preventDefault();
   console.log("Hola como estas");
  });

})
