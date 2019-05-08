
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
      var blob=new Blob([data]);
      var link=document.createElement('a');
      link.href=window.URL.createObjectURL(blob);
      link.download="test.csv";
      link.click();
    }
  });

  $("#jsonData").val('');
});
