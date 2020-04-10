$('.table tbody').on('click','.red',function(){
    $(this).closest('tr').remove();
})
function press(){
    alert("Do you want to delete");
}




function addRow(){
    // get input values
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    var day = document.getElementById('day').value;
    var request = document.getElementById('request').value;
    
    

    // get the html table
    //0 = the first table
    var table = document.getElementsByTagName('table')[0];

    //add new empty row to the table
    //0 = in the top
    // table.rows.length = the end
    var newRow = table.insertRow(table.rows.length);


    // add cells to the row
    var cel1 =  newRow.insertCell(0);
    var cel2 =  newRow.insertCell(1);
    var cel3 =  newRow.insertCell(2);
    var cel4 =  newRow.insertCell(3);
    var cel5 =  newRow.insertCell(4);

    //add values to the cell
    cel1.innerHTML = state.fontsize(5);
    cel2.innerHTML = city.fontsize(5);
    cel3.innerHTML = day.fontsize(5);
    cel4.innerHTML = request.fontsize(5);
    cel5.innerHTML = button;
}
