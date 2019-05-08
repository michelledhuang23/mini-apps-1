
$("#jsonForm").submit(function(e) {

  e.preventDefault(); // avoid to execute the actual submit of the form.

  var url = 'http://localhost:3000/';
  var form = $(this);

  $.ajax({
    type: "POST",
    url: url,
    data: new FormData(form[0]),
    processData: false,
    contentType: false,
    success: function(data)
    {
      // var blob=new Blob([data]);
      console.log(data);
      var link=document.createElement('a');
      link.href=data;
      link.text = "Download";
      link.download="data.csv";
      $("#test").append(link);
    }
  });

  $("#jsonData").val('');
});
