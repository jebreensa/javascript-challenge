// Reading the js. file: 
var tableData=data;
console.log(tableData);
// YOUR CODE HERE!
//setting up the UFO sightings/ consoling th data from data.js: 
function tableDisplay(ufoSightings) {
    var tbody = d3.select("tbody");
    ufoSightings.forEach((ufoRecord) => {
        var row = tbody.append("tr");
        Object.entries(ufoRecord).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.html(value);
        });
    });
};

tableDisplay(tableData);

//empty table for the new data:

function deleteTbody() {
    d3.select("tbody")
        .selectAll("tr").remove()
        .selectAll("td").remove();
};

//Table Filter:
var filter= d3.select("#filter-btn");

//filtering the Data table and display the entire data table if there is no entries: 
filter.on("click", function(event){
    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");

    if(dateInput.trim() === "") {
        var filteredData=tableData;
    } else {
         var filteredData=tableData.filter(ufoSightings=>
            ufoSightings.datetime === dateInput.trim());
    };
    console.log(filteredData);
    tableDisplay(filteredData);
});




//Clear the inputs:
var filterClear = d3.select('#clear-btn')

filterClear.on("click", function() {
    
    d3.event.preventDefault();
    
    deleteTbody();

    tableDisplay(tableData)
});