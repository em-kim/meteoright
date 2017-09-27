var waterBottle = {
  color: "green",
  name: "marks klean kanteen, he's a fiend"
};

/*var hideMeteorites = function(){
  var element = document.getElementById("barf");
  element.style.visibility = "hidden";
};*/

//jQuery is a lib written in javascript
//use cdnjs.com ? to bring in the jQuery lib
//DOM manipulation code 
// this next line will make sure that the page is loaded prior to applying any jQuery to elements.
$(document).ready(function(){

  $('#barf').css({
    color:"brown"
  });

  $('#btn').click(function(){
    $('#barf').hide();
  });

});