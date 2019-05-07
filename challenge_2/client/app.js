
$("#jsonForm").submit(function(e) {

  e.preventDefault(); // avoid to execute the actual submit of the form.

  var url = 'http://localhost:3000/';

  $.ajax({
         type: "POST",
         url: url,
         data: {json: $("#jsonData").val()
          },
         success: function(data)
         {
           console.log('test');
         }
       });


});
