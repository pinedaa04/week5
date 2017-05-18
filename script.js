$(document).ready(function () {
  var i = 0, e = event, arr = [i], tBody = $('#tBody'), addButton = $('#addItemButton'), tRow = $('#tRow'), cityForm = $('#cityForm'), cityTable = $('#cityTable'), submit = $('#submit'), tCity = $('#tCity'), tState = $('tState'), city = "city", state = "state";
  

  cityForm.hide();
  addButton.on("click", function (e) {
    event.preventDefault();
    cityForm.show();
    cityTable.hide();
  });
    

//    $countMsg = $('li[id="countMsg"]').append("Count: ");
  submit.on("click", function (event) {
    city.val();
    country.val();
    console.log("Working");
    function updateArray(city, state) {
      arr.push({tCity: city, tState: state}); //ask
    }
    cityTable.show();
    cityForm.hide();
    function populateTable() {
      for (i; i <= arr.length; i++) {
        var insert = tRow.insertCell(0);
        insert.append(city, country);
      
      }
    }
  });
  
});