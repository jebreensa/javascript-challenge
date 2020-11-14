var tableData=data;

// YOUR CODE HERE!
// viewing the avialble data from data.js:
// console.log(tableData)  

// Next step is we want to create our references:
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// pushing the data into HTML:
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column]))});}

addData(tableData);

// Setup your event listener:
button.on("click", () => {
    d3.event.preventDefault();   
    var inputDate = inputFieldDate.property("value").trim();
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

    $tbody.html("");

    let response = {
        filterDate
    }

    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    else {
        $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
    }
})