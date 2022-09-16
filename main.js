
function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_row1=document.getElementById("new_row1").value;
 var new_row2=document.getElementById("new_row2").value;
 var new_row3=document.getElementById("new_row3").value;
	
 var table=document.getElementById("table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='first_row"+table_len+"'>"+new_row1+"</td><td id='second_row"+table_len+"'>"+new_row2+"</td><td id='third_row"+table_len+"'>"+new_row3+"</td><td><input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'>  <input type='button' value='sum' class='sum' onclick='total("+table_len+")'></td></tr>";

 document.getElementById("new_row1").value="";
 document.getElementById("new_row2").value="";
 document.getElementById("new_row3").value="";



}
function total(){
var table = document.getElementById("table"), sumvalue = 0;
 for(var i = 1; i< table.rows.length-1; i++){
    sumvalue = sumvalue + parseInt(table.rows[i].cells[2].innerHTML);
}
document.getElementById("total").innerHTML = "Sum Value = " + sumvalue;
console.log(sumvalue);
}