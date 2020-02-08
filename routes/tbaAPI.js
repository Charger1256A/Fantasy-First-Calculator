const request = require('request');
const moment = require('moment');
const fs = require('fs');

$(document).ready(function() {
  
    $(".form-control").on("change paste keyup", function() {
        var parentRow = $(this).parents(".row");
       
     
        parentRow.find('.team-number').each(function() {
            var teamNumber = $(this).val();
           
        });
     
    });
    console.log(parentRow);
});
       

 