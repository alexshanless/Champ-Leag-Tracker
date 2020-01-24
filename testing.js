// alert("hi");
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
//     console.log(instances)
//   });


$(document).ready(function(){
    $('select').formSelect();
  });

  var instance = M.FormSelect.getInstance(elem);
instance.getSelectedValues();
