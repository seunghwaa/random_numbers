$(document).ready(function(){
    $('#random_number').click(function(){
      $(this).html(Math.floor(Math.random()*10)); 
    });
});


