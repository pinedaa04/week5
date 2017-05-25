$(document).ready(function () {
  var i = 0, e = event, tBody = $('#tBody'), addButton = $('#addItemButton'), cityForm = $('#cityForm'), cityTable = $('#cityTable'), submit = $('#submit'), city = $('#city'), state = $('#state'), count = 0;
  var arr = [];
  var mCity;
  var mState;
  
  cityForm.hide();
  addButton.on("click", function (e) {
    event.preventDefault();
    cityForm.show();
    cityTable.hide();
  });
  
  function updateArray(city, state) {
    arr.push({mCity: city, mState: state});
  }
  function populateTable() {
    $('#cityTable tbody').html('<tr></tr>'); 
    console.log("arr size " + arr.length);
    for (i = 0; i < arr.length; i++) {
      // this query finds the child tbody of the cityTable
      $('#cityTable tbody').append('<tr><td>' + arr[i].mCity + '</td>' + '<td>' + arr[i].mState + '</td></tr>'); 
//      
      count++;
    }
  }

  submit.on("click", function (e) {
    e.preventDefault();
    console.log(":::" + city.val());
    updateArray(city.val(), state.val());
    populateTable();
    cityForm.hide();
    cityTable.show();
  });
  
});